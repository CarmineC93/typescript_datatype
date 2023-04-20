//variables
const a = 5;

//functions
function somma(a = 0 ,b: number){
    return a+b;
}

console.log(3,5);

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

persona.cognome;

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

trovaPersona({nome: 'pino', cognome:'rossi'});

//Enum per etichettare
enum Ruolo{
    USER, ADMIN, GUEST = 'guest'
}
const persona3 = {
    nome: 'ciro',
    ruolo: Ruolo.ADMIN
}
if(persona3.ruolo == 1){
    console.log('indice del ruolo admin = 1')
}

if(persona3.ruolo != 'guest'){
    console.log('non sono un guest')
}