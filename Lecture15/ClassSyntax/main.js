
let carConfiguration = {

    name: "bmw",
    price:"$2000",
    color: "red",
    isDiskBrake:true


}



class Car {

    constructor(carConfiguration){

        this.name = carConfiguration.name;
        this.price = carConfiguration.price;
        this.isDiskBrake = carConfiguration.isDiskBrake;
        this.color= carConfiguration.color
    }

    // Normal function

    getCarName(){

        console.log(` the name of our car is: ${this.name}`)
    }

    // getter function 

    get getPrice(){

        return this.price;

    }

    //setter function

    set setPrice(newPrice){

        if(newPrice < 0){

            this.price = 0
        }
        else{

            this.price = newPrice
        }
    }

    // static function

    static print(){

        console.log(" this is a static function working on the Car class")
    }


}


class RacingCar extends Car{

    constructor(carConfiguration,maxSpeed,engine,weight){

            super(carConfiguration);
          
            this.maxSpeed=maxSpeed;
            this.engine=engine;
            this.weight=weight;
    }


    getCarName(){

        super.getCarName();
        console.log(this.name);

    }
}

const c1 = new Car(carConfiguration);

const r1 = new RacingCar(carConfiguration,"400", "v8", "500kg");


