class App1
{
    //pobierami div z html
    main: HTMLDivElement = <HTMLDivElement>document.getElementById('newInputs')
    variable: HTMLInputElement = <HTMLInputElement>document.getElementById('inputs')
    calculations: HTMLDivElement = <HTMLDivElement>document.getElementById('data')
    add_Button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('add')
    removeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById('delete')
    random_Button: HTMLButtonElement = <HTMLButtonElement>document.getElementById('random')
    loader: HTMLDivElement = <HTMLDivElement>document.getElementById('loader')
    sumOutput: HTMLInputElement;
    averageOutput: HTMLInputElement;
    minOutput: HTMLInputElement;
    maxOutput: HTMLInputElement;
    

    
    //Tablica inputow do obliczen - tablica
    numbersArray: number[] = [];
    inputsArray: number[] = [];
    newForm: HTMLInputElement;


    constructor()
    {
        this.getInputs()
        //Tablica inputow do obliczen
        this.createInput();
        this.showSum();
        this.showAvg();
        this.showMin();
        this.showMax();
        this.hiddenLoader();
        var x = this.main.getElementsByTagName('input')
        console.log(x);
        
    }

    getInputs()
    {
        this.sumOutput = document.querySelector('#sum');
        this.averageOutput = document.querySelector('#avg');
        this.minOutput = document.querySelector('#min');
        this.maxOutput = document.querySelector('#max');
    }

    hiddenLoader()
    {
        this.loader.style.visibility ='hidden';
    }

    showLoader()
    {
        this.loader.style.visibility ='visible';
    }


    createInput()
    {
        //obsługa triggerowania inputow
        this.variable.addEventListener("input", () => 
        {
            this.showLoader();
            const inputValue : number = +this.variable.value;
            this.main.innerHTML = '';

            for (let i = 0; i < inputValue; i++)
            {
                this.newForm = document.createElement('input');
                this.newForm.id = "form"+i
                this.newForm.placeholder = 'Podaj liczbę'
                this.main.appendChild(this.newForm);
                console.log(this.newForm.id)
            }
        });
    }

    getValues()
    {
        const inputValue = this.main.getElementsByTagName('input').length;

        for (let i = 0; i < inputValue; i++)
            {
                this.numbersArray[i] = +(document.getElementById('form'+i) as HTMLInputElement).value;
            }

    }

    showSum()
    {
        
        this.main.addEventListener("input", () => 
        {
            this.showLoader();
            this.getValues();
            let sum : number = 0;

            for (let i = 0; i < this.numbersArray.length; i++)
                {
                    sum += +this.numbersArray[i];
                }

            this.sumOutput.value = sum.toString();
            this.hiddenLoader();
        });
        
    }

    showAvg()
    {
        this.main.addEventListener("input", () => 
        {
            this.getValues();

                let sum : number = 0;

                for (let i = 0; i < this.numbersArray.length; i++)
                    {
                        sum += +this.numbersArray[i];
                    }

                let avg: number = sum/this.numbersArray.length;
                this.averageOutput.value = avg.toString();
        });
    }

    showMin()
    {
        
        this.main.addEventListener("input", () => 
        {
            this.getValues();

            let min = Math.min(...this.numbersArray);
        
            this.minOutput.value = min.toString();
        });
    }

    showMax()
    {
        
        this.main.addEventListener("input", () => 
        {
            this.getValues();

            let max = Math.max(...this.numbersArray);
        
            this.maxOutput.value = max.toString();
        });
    }

    addButton()
    {
        var numberOfInputs = this.main.getElementsByTagName('input');

        this.newForm = document.createElement('input');
        this.newForm.id = "form"+(numberOfInputs.length)
        this.newForm.placeholder = 'Podaj liczbę'
        
        this.main.appendChild(this.newForm);
    }

    deleteButton()
    {
        var numberOfInputs = this.main.getElementsByTagName('input')
        var removeElement = document.getElementById("form"+(numberOfInputs.length-1));
        this.main.removeChild(removeElement);
    }
    

    randomButton()
    {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        var numberOfInputs = this.main.getElementsByTagName('input')
        
        for(let i =0; i < numberOfInputs.length; i++)
        {
            var fill = <HTMLInputElement>(document.getElementById("form"+i));
            
            fill.value = getRandomIntInclusive(0, 100);
        }

    }
}

const calculateApp1 = new App1();