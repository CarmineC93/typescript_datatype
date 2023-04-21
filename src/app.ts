//variables
const a = 5;
const b: number = 6;

//functions
function somma(a: number, b = 1): number{
    return a+b;
}

function sottrazione(a: number, b = 0): number{
    return a - b;
}

console.log(somma(5)); //6
console.log(somma(3,5)); //8

function printSum(a: number, b:number): void{
    console.log(a+b);
}

printSum(2,5); //7

let variabile1: Function;

let variabile2: (x: number, y: number) => number
variabile1 = somma;
variabile2 = sottrazione;


//objects

const persona: {
    nome: string,
    cognome: string,
    eta: number
} = {
    nome: "reno",
    cognome: "landia",
    eta: 45
}

console.log(persona.cognome); //landia

//array
const array1:number[] = [1, 2, 3];
const array2 = [1, true, ''];

//tuple
const tupla1: [number, number] = [1 , 2]; //[number, number]
const array3  = [1 , 2]; //number[]
const tupla2: [number, string, number] = [1, '', 2];

//any
const array4: any[] = ['', '', 2, true];
let num:any = 5;
num = '';

//union
let prova: string | number | any[] = 1;

//custom type
type Persona2 ={
    nome: string,
    cognome: string
}

let persona2:Persona2;

persona2 = {
    nome: 'luca',
    cognome: 'moliere'
}

function trovaPersona(persona2: Persona2){
    console.log(persona2.nome);
};

trovaPersona({nome: 'pino', cognome:'rossi'});  //pino

//Enum to labeler
enum Ruolo{
    USER, ADMIN, GUEST = 'guest'
}
const persona3 = {
    nome: 'ciro',
    ruolo: Ruolo.ADMIN
}
if(persona3.ruolo == 1){ //true
    console.log('indice del ruolo admin = 1')
}

if(persona3.ruolo != 'guest'){ //true
    console.log('non sono un guest')
}

//Classes

class Sith{
    private name: string = 'Darth'
    private lastname: string = 'Maul'

    static useTheForce(){
        console.log("wooooo");
    }

}

Sith.useTheForce(); //woooo //con le static non ho bisogno di creare un'istanza per accedere al metodo o alla proprietà static

let sith1: Sith = new Sith()


class Jedi{
    //private name: string
    //protected lastname: string

    constructor(private name: string, protected lastname:string){
        //this.name = name;
        //this.lastname = lastname;
    }

    public sayHi(): void{
        console.log(`Hi, i'm ${this.name}`)
    }

    public support(jedi: Jedi): void{
        console.log(`Use the Force, ${jedi.name} !`)
    }
}

let jedi1: Jedi = new Jedi ('Luke', 'Skywalker')
let jedi2: Jedi = new Jedi ('Obiwan', 'Kenobi')

jedi2.sayHi(); //hi, i'm Obiwan
jedi2.support(jedi1); //use the force, Luke

class Padawan extends Jedi{
    //private master:string = 'Anakin Skywalker'
    constructor(
        private master:string, 
                name:string, 
                lastname:string) 
                {
        super(name, lastname); //i can modify only lastname because is protected in the parent class 
    }

    public sayHiToTheMaster(jedi: Jedi){
        console.log(`Hi master ${this.master}`)
    }
}

abstract class RoboticUnit{

    abstract obeyToHuman():void;
}

class R2_D2 extends RoboticUnit{

    obeyToHuman(): void {
        throw new Error("Method not implemented.");
    }
}

//Singleton
class LordOfTheSith extends Sith{

    private static instance: LordOfTheSith;

    private constructor(    //private 
        private role:string,    
                name: string,
                lastname:string, )
            {
        super();
    }

    static getInstance(){ //like an infinite inside loop
        //se esiste la manda
        if(LordOfTheSith.instance){
            return this.instance;
        }
        //se non esiste la crea
        this.instance = new LordOfTheSith('Chancellor', 'Darth','Sidius'){
            return this.instance;
        }
    }

    sayHi(){
        console.log(`hi, i'm the ${this.role}`)
    }
}

//Interfaces
interface Guerriero{
    proprieta: string
    fight(): void;
}

interface Volante{
    fly(): void;
}


class Namecciano extends Jedi implements Guerriero, Volante{ //posso estendere una sola classe, ma posso implementare più interfacce

    proprieta:string

    constructor(proprieta:string, name:string, lastname:string){
        super(name, lastname);
        this.proprieta=proprieta;
    }

    abstract fight(): void;

    abstract fly(): void;

}

//generics : componenti con utilizzi generici
const array5: Array<string> = ['tizio', 'caio', 'sempronio']

function createArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

const arr1 = createArray<number>([1,2,3]);
const arr2 = createArray<string>(['primo', 'secondo', 'terzo']);

function createAnotherArray<T extends number | string>(items: T[]): T[]{
    return new Array().concat(items)
}

class ProvaGenerica<T>{
    private lista: T[] = []

    addItem(item: T){
        this.lista.push(item)
    }

    removeItem(item: T){
        this.lista.splice(this.lista.indexOf(item,1))
    }
}

const listaStringa = new ProvaGenerica<string>()
listaStringa.addItem('id');
listaStringa.addItem('username');

const listaNumeri = new ProvaGenerica<number>()
listaNumeri.addItem(50);
listaNumeri.addItem(5626);

//Decorators

function Printer(messaggio: string){
    return function(constructor: any){
        console.log('messaggio personalizzato')
        console.log(constructor)
    }

}

@Printer('ciao')
class Studio{
    constructor(){
        console.log('prova')
    }
}

//const studio = new Studio();

//EXPORT IMPORT FILES
import {addizione} from './function.js'

import{StarShip} from './function.js'
const starShip1 = new StarShip()
starShip1.guidaIperspazio()