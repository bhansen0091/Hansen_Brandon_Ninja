

class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My Ninja name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name} | Health: ${this.health} | Strength: ${this.strength} | Speed: ${this.speed}`);
    }

    drinkSake(){
        this.health += 10
    }

}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();