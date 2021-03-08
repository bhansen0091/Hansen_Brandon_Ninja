

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
        console.log(`\nName: ${this.name} | Health: ${this.health} | Strength: ${this.strength} | Speed: ${this.speed}\n`);
    }

    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10
        this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log(`\nDo or do not, there is no try...`);
    }

}

const ninja1 = new Ninja("Hyabusa");

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
