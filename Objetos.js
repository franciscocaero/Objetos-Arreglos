const user = {
    name:"Daniel",
    lastName:"Cola",
    age:23,
    address:{
        city:"Machachi",
        telephone:"0968388776",
        street:"EL Centro"
    },
    Friends:['Nayelie','Lesly','Martin','Alisson'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[3]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[2]}`
    }
}
//Accder a sus claves.
console.log(user.state);
console.log(user.name);
console.log(user.age);
console.log(user.sendMail());
console.log(user.sendNotification());

// Agregar un par de clave y valor al objeto

user.girlfriend ="Silvana"

// Eliminar un par de clave y valor del objeto
delete user.state

console.log(user);


//Destructuración de objetos 

const user2 = {
    name:"Daniel",
    lastName:"Cola",
    age:23,
    address:{
        city:"Machachi",
        telephone:"0968388776",
        street:"EL Centro"
    },
    Friends:['Nayelie','Lesly','Martin','Alisson'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[3]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[2]}`
    }
}

const { name, age, address } = user2;
console.log(name); // Imprimirá "Daniel"
console.log(age); // Imprimirá 23
console.log(address); // Imprimirá el objeto con las propiedades city, telephone y street

const { city, telephone } = user2.address;

console.log(city); // Imprimirá "Machachi"
console.log(telephone); // Imprimirá "0968388776"

const { name: firstName, lastName, Friends } = user2;

console.log(firstName); // Imprimirá "Daniel"
console.log(lastName); // Imprimirá "Cola"
console.log(Friends); // Imprimirá la matriz ['Nayelie','Lesly','Martin','Alisson']

//Congelacion de un objeto

//Use de freeze
'use strict';
const user3 = {
    name:"Daniel",
    lastName:"Cola",
    age:23,
    address:{
        city:"Machachi",
        telephone:"0968388776",
        street:"EL Centro"
    },
}

Object.freeze(user3)
console.log(Object.isFrozen(user3));
user3.girlfriend ="Mishell"
console.log(user3);

//Uso de seal

const user4 = {
    name:"Daniel",
    lastName:"Cola",
    age:23,
    address:{
        city:"Machachi",
        telephone:"0968388776",
        street:"EL Centro"
    },
}
// con seal no se puede agregar o eliminar propiedades, pero 
// si se puede modificar las propiedades
Object.seal(user4)
console.log(Object.isSealed(user4))
user4.name= "Kevin"
console.log(user4);

//Copiar dos Objetos
const user5 = {
    name:"Kevin",
    lastName:"Cola",
    age:23,
}
const ExtraInformation = {
    address:{
        city:"Machachi",
        telephone:"0968388776",
        street:"EL Centro"
    },
    Friends:['Nayelie','Lesly','Martin','Alisson'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[3]}`
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[2]}`
    }
}
const allInformation = {...user5,...ExtraInformation}
console.log(allInformation)

//Uso del this
const user6 = {
    name:"Daniel",
    lastName:"Cola",
    age:23,
    address:{
        city:"Machachi",
        telephone:"0968388776",
        street:"EL Centro"
    },
    Friends:['Nayelie','Lesly','Martin','Alisson'],
    state:true,
    sendMail (){
        return `send mail to ${this.Friends[0]}`;
        // Aquí, "this" se refiere al objeto "user",
        // por lo que "this.Friends[3]" accede al cuarto elemento de la matriz "Friends" del objeto "user".
    },
    sendNotification: function (){
        return `send notification to ${this.Friends[1]}`;
        // En este método también, "this" se refiere al objeto "user",
        // y "this.Friends[2]" accede al tercer elemento de la matriz "Friends" del objeto "user".
    }
};

console.log(user6.sendMail()); // Imprimirá "send mail to Alisson"
console.log(user6.sendNotification()); // Imprimirá "send notification to Martin"

//Métodos para trabajar con objetos 

const keys = Object.keys(user6);
console.log(keys); 

const values = Object.values(user6);
console.log(values); 

const entries = Object.entries(user6);
console.log(entries); 


//(ES6) Nombres abreviados de propiedades 

const name1 = "Daniel";
const lastName1 = "Cola";
const age1 = 23;
const city1 = "Machachi";
const telephone1 = "0968388776";
const street = "EL Centro";
const Friends1 = ['Nayelie','Lesly','Martin','Alisson'];
const state = true;

const user8 = {
    name1,
    lastName1,
    age1,
    address: {
        city1,
        telephone1,
        street
    },
    Friends1,
    state,
    sendMail() {
        return `send mail to ${this.Friends[3]}`;
    },
    sendNotification() {
        return `send notification to ${this.Friends[2]}`;
    }
};

