"use strict";
//variables
const a = 5;
const b = 6;
//functions
function somma(a, b = 1) {
    return a + b;
}
function sottrazione(a, b = 0) {
    return a - b;
}
console.log(somma(5)); //6
console.log(somma(3, 5)); //8
function printSum(a, b) {
    console.log(a + b);
}
printSum(2, 5); //7
let variabile1;
let variabile2;
variabile1 = somma;
variabile2 = sottrazione;
//objects
const persona = {
    nome: "reno",
    cognome: "landia",
    eta: 45
};
console.log(persona.cognome); //landia
//array
const array1 = [1, 2, 3];
const array2 = [1, true, ''];
//tuple
const tupla1 = [1, 2]; //[number, number]
const array3 = [1, 2]; //number[]
const tupla2 = [1, '', 2];
//any
const array4 = ['', '', 2, true];
let num = 5;
num = '';
//union
let prova = 1;
let persona2;
persona2 = {
    nome: 'luca',
    cognome: 'moliere'
};
function trovaPersona(persona2) {
    console.log(persona2.nome);
}
;
trovaPersona({ nome: 'pino', cognome: 'rossi' }); //pino
//Enum to labeler
var Ruolo;
(function (Ruolo) {
    Ruolo[Ruolo["USER"] = 0] = "USER";
    Ruolo[Ruolo["ADMIN"] = 1] = "ADMIN";
    Ruolo["GUEST"] = "guest";
})(Ruolo || (Ruolo = {}));
const persona3 = {
    nome: 'ciro',
    ruolo: Ruolo.ADMIN
};
if (persona3.ruolo == 1) { //true
    console.log('indice del ruolo admin = 1');
}
if (persona3.ruolo != 'guest') { //true
    console.log('non sono un guest');
}
//Classes
class Sith {
    constructor() {
        this.name = 'Darth';
        this.lastname = 'Maul';
    }
    static useTheForce() {
        console.log("wooooo");
    }
}
Sith.useTheForce(); //con le static no  ho bisogno di creare un'istanza per accedere al metodo o alla proprietà static
let sith1 = new Sith();
class Jedi {
    //private name: string
    //protected lastname: string
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        //this.name = name;
        //this.lastname = lastname;
    }
    sayHi() {
        console.log(`Hi, i'm ${this.name}`);
    }
    support(jedi) {
        console.log(`Use the Force, ${jedi.name} !`);
    }
}
let jedi1 = new Jedi('Luke', 'Skywalker');
let jedi2 = new Jedi('Obiwan', 'Kenobi');
jedi2.sayHi(); //hi, i'm Obiwan
jedi2.support(jedi1); //use the force, Luke
class Padawan extends Jedi {
    //private master:string = 'Anakin Skywalker'
    constructor(master, name, lastname) {
        super(name, lastname); //i can modify only lastname because is protected in the parent class 
        this.master = master;
    }
    sayHiToTheMaster(jedi) {
        console.log(`Hi master ${this.master}`);
    }
}
class RoboticUnit {
}
class R2_D2 extends RoboticUnit {
    obeyToHuman() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=app.js.map