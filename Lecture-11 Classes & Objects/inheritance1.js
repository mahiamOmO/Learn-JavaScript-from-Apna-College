class Person {
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class Engineer  extends Person {
    work(){
        console.log("solve problems,build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let momoObj = new Engineer();