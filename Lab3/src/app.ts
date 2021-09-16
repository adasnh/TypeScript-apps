import { Weather } from './weather'
export class App {
    cityInput: HTMLInputElement;
    nameOfTheCity: string;
    citiesArray: string[] = [];
    weatherInCity: Weather;
    opwApiKey = '33cec0e52d02f569adffe9c0b46056ee';
    constructor() {
        this.cityInput = document.querySelector('#cityInput');
        document.querySelector('#addButton').addEventListener('click', () => this.mainAction())
        document.querySelector('#deleteButton').addEventListener('click', () => this.clearStorage())
        document.querySelector('#cityInput').addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                document.getElementById("addButton").click();
                var v = <HTMLInputElement>(document.getElementById("cityInput"));
                v.value = "";
            }
        })
        this.loadData();
    }
    mainAction() {
        this.getCity();
        this.getCityInfo(this.nameOfTheCity)
    }
    clearStorage(){
        localStorage.clear();
        location.reload()
    }
    getCity() {
        this.nameOfTheCity = this.cityInput.value;
        this.citiesArray.push(this.nameOfTheCity);
        this.saveData(this.citiesArray);
    }
    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        console.log(weather);
        let name:string=weather.name;
        let temp:number=weather.main.temp;
        let wind :number =weather.wind.speed;
        let pressure:number =weather.main.pressure;
        let weatherDesc:string =weather.weather[0].description;
        this.weatherInCity = new Weather(name,temp,wind,pressure,weatherDesc);
        this.createBox(this.weatherInCity);
    }
    async getWeather(city: string): Promise<any> {
        const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}&lang=pl&units=metric`);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    loadData() {
        const data = localStorage.getItem('weatherData');
        let savedData :string[]=[]
        savedData=JSON.parse(data);
        for(let i=0;i<savedData.length;i++)
          {
              this.citiesArray.push(savedData[i])
              this.getCityInfo(savedData[i]);
          }  
    }
    createBox(obj:Weather){
        const div = document.querySelector('.checkedCities');
        const element=document.createElement('div');
        element.className='weatherBox';
        element.innerHTML+=
        `<span class="nameOfTheCity">${this.weatherInCity.nameOfTheCity}</span><br>
        <span class="desc"> ${this.weatherInCity.weatherDescription}</span><br>
        <span class="temperature">Temperatura : ${this.weatherInCity.temperature}°C</span><br>
        <span class="pressure"> Ciśnienie : ${this.weatherInCity.pressure} Hpa</span><br>
        <span class="wind"> Wiatr : ${this.weatherInCity.windSpeed} Km/h</span><br>
        `;
        div.appendChild(element);
    }
}

