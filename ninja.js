class Ninja {
    constructor(name, speed = 3, strength = 3) {
        this.name = name;
        this.health = 100;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`Ninja: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hayabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();