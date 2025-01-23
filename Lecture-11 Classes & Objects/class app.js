class ToyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    setBrand() {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = new ToyotaCar();
lexus.setBrand("lexus");