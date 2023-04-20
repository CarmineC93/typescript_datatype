//variables
var a = 5;
//functions
function somma(a, b) {
    if (a === void 0) { a = 0; }
    return a + b;
}
console.log(3, 5);
//objects
var persona = {
    nome: "reno",
    cognome: "landia",
    eta: 45
};
persona.cognome;
//array
var array1 = [1, 2, 3];
var array2 = [1, true, ''];
//tuple
var tupla1 = [1, 2]; //[number, number]
var array3 = [1, 2]; //number[]
var tupla2 = [1, '', 2];
//any
var array4 = ['', '', 2, true];
var num = 5;
num = '';
//union
var prova = 1;
var persona2;
persona2 = {
    nome: 'luca',
    cognome: 'moliere'
};
function trovaPersona(persona2) {
    console.log(persona2.nome);
}
;
trovaPersona({ nome: 'pino', cognome: 'rossi' });
//Enum per etichettare
var Ruolo;
(function (Ruolo) {
    Ruolo[Ruolo["USER"] = 0] = "USER";
    Ruolo[Ruolo["ADMIN"] = 1] = "ADMIN";
    Ruolo["GUEST"] = "guest";
})(Ruolo || (Ruolo = {}));
var persona3 = {
    nome: 'ciro',
    ruolo: Ruolo.ADMIN
};
if (persona3.ruolo == 1) {
    console.log('indice del ruolo admin = 1');
}
if (persona3.ruolo != 'guest') {
    console.log('non sono un guest');
}
