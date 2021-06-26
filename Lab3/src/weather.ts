export class Weather{

    nameOfTheCity:string
    temperature: number
    windSpeed:number
    pressure:number
    weatherDescription:string;

    constructor(city:string,temp:number,wind:number,press:number,weatherdesc:string) {
        this.nameOfTheCity=city;
        this.temperature=Math.round(temp);
        this.windSpeed=wind;
        this.pressure = press;
        this.weatherDescription =weatherdesc;
       
    }

}