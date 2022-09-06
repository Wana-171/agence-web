import _, { forEach } from "lodash";
import "./assets/css/styles.css";
import Icon from './assets/img/img-test-webpack.jpg';
import "@fortawesome/fontawesome-free/js/all";

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add("text-3xl");

//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());

// var string ="str"; //
// var number =31; // number
// var falsee = false; // false =0
// var truee = true; // true = 1
// var array = []; // tableau
// var object = {}; // objet
// var symbol = new Symbol();

// var undefined = undefined;

// var nulll = null;

// var functionn = function name(Dark) {
  
// }
// control+k+C pour commentaire
// var test=1;
// console.log(test);

// test=2;
// console.log(test);

// var test="test";
// console.log(test);

// let azerty = 1; // identifient unique
// console.log(azerty);

// azerty = "number";

// let azerty = false ;

// toujour utiliser let au lieu de var


// const seconde = 60; // lectrure seul on peut pas le reutiliser
// console.log(seconde);

// seconde = 80 ;

// const seconde = 90;

// function test() {
// let nam = "truc" // est comme const cest une porter en block
// console.log(nam);// toujour le mettre dans le bloc si on veux utiliser la console log
// }
// console.log(nam);// toujour le mettre dans le bloc si on veux utiliser la console log

// let data = {
//   userName:"truc",
//   iban: "fr645646",

// }
// console.log(data);

// const root = document.getElementById('root');//  renvoie l'objet

// // console.log("Vous vous appelez : "+ data.userName + " " + data.iban); // Sa cest que pour un cara 

// // console.log(`Vous vous appelez :${data.userName}, Votre IBAN est : ${data.iban}`);//Concatenation pour mettre un chaine de cara et variable +

// let results = `Vous vous appelez :${data.userName}, Votre IBAN est : ${data.iban}`;
// console.log(results);

// let paragraph = document.createElement('p'); // cree pour unjecter du contenue sur html
// paragraph.innerHTML = results;


// root.append(paragraph); // apres le h1 par exemple
// // root.before(paragraph); // avant le h1 par exemple

// class User {
//   constructor(username, iban, city) {
//     this.username=username;
//     this.iban=iban;
//     this.city=city;
//   } // utiliser aussi en php constructor
// }

// new User("truc", 77, "Ville")  //console.log(new User); log new 
// new User("truc", 78, "Vil") // programation orienter object 


// class Car {
//   constructor(mark, model, prise, color, desc) {
//     this.mark=mark;
//     this.model=model;
//     this.prise=prise;
//     this.color=color;
//     this.desc=desc;
//   }
// }

// console.log (new Car ("Audi", "TT", 4600, "gris", "lorem")); // Test 


// correction exo 30/08/22
// const Input = (type, id) => {
//     let input = document.createElement("input");
//     input.type = type || "text";
//     input.id = id || "default";
//     input.classList.add("border-2")
//     input.classList.add("border-red-500")
//     return input;
//   }
  
//   let input2 = Input("number", "");
//   let input3 = Input("text", "");
//   let input4 = Input("date", "");
//   let input5 = Input("color", "");
//   console.log(input2, input3, input4, input5);
  
//   const root = document.getElementById("root");
//   root.append(input2);
//   root.append(input3);
//   root.append(input4);
//   root.append(input5);

// exo correction 28/08/22
// let array = [1, 2, 3, 4];
// let array2 = [5]; 
// let array3 = array.concat(array2);
// let initial = 0;
// console.log(array);
// array.push(5);
// console.log(array);
// array.pop();
// console.log(array);

// console.log(array.map((value) => value));
// console.log(array.reduce((previousValue, currentValue) => previousValue + currentValue, initial));
// console.log(array3);
// // Operateur spread 
// [...array] = [...array, 6];
// console.log(array);
// console.log(array[4]);

// let arrayObject = [{id: 0}, {id: 1, userName: "Safwan"}];
// console.log(arrayObject[1].userName); 

//exo correction 31/08/22
// class Accessory {
//   constructor(category, size) {
//     this.category = category;
//     this.size = size;
//   };
  
//   headphones() {
//     return `mon casque est un : ${this.category} et la taille est de : ${this.size}`;
//   };
  
//   earphones() {
//     return `mes écouteurs sont : ${this.category} et la taille est de : ${this.size}`;
//   };
// };

// class Phone extends Accessory {
//   constructor(color, price, mark, desc, category, size) {
//     super(category, size);
//     this.color = color;
//     this.price = price;
//     this.mark = mark;
//     this.desc = desc;
//   };

//   show() {
//     console.log(`Catégorie : ${super.earphones()}`);
//   }
// };

// let phone = new Phone("blue", 5000, "apple", "lorem", "airpods", 1.24);
// console.log(phone.earphones());
// phone.show();

// let input1 = document.getElementById("input-1");
// let input2 = document.getElementById("input-2");
// let btn = document.getElementById("submit");


// const calculate = () => {
//   let results1 = parseInt(input1.value);
//   let results2 = parseInt(input2.value);
//   let a = results1 + results2
//   console.log(a);
//   return a;
// };

// btn.addEventListener("click", calculate);

// console.log(true + true === 2 ? "vrai" : "faux");
// console.log(false + false === 0 ? "vrai" : "faux");

//modelisation agence imo


//exo Nono 31/08/22
// class Agency  {
//     constructor(name) {
//         this.name = name;
//     };

//     eclair() {
//         return `Je suis l'agence eclair : ${this.name}`;
//     };

//     century21() {
//         return `Je suis l'agence century21 : ${this.name}`;
//     };

//     foncia() {
//         return `Je suis l'agence foncia : ${this.name}`;
//     };

// };

// //home
// class Home extends Agency {
//     constructor(surface, price, location, name) {
//         super(name);
//         this.surface = surface;
//         this.price = price;
//         this.location = location;
//     };

//     showAgency() {
//         console.log(`La surface de ma maison est de : ${this.surface} et le nom de mon agence est : ${this.name}`);
        
//     };

//     showBis() {
//         console.log(`La surface de ma maison est de : ${this.surface} Et le prix est de : ${this.price}€ ; ${super.eclair()}`);
//     };
// };
// let Michel = new Home("100m²", 1, "Meaux", "eclair");
// let Daniel = new Home("150m²", 10, "Meaux", "century21");
// Michel.showAgency();
// Daniel.showBis();
// console.log(`prix : 
// ${Daniel.price}€`);
// console.log("prix : "+ Daniel.price + "€");

//exo tableau
// let arrey = [1, 2, 3,];
// let object =(a: 1, b: 2, c: 3 );

// array.forEach(element) => {
//     console.log(element,"break");
// }; // foreach 

// // let test ; syntaxe bis
// // test = []

// for (const iterator of array) {
//     console.log(iterator, "break");
// }; //forof

// arrey.map(element => {
//     console.log();
// });

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log("break");
//     }
// };

// let number = 10;
// while (number >= 5) {
//     console.log(number++);//++ veut dire uncrementer quelque chose ex +1
//     console.log(number--);//-- veut dire -1
// };

// function Count(){
//     this.Count = 0;
//     this.sum = 0;
// };
// Count.prototype.add = function(array) {
//     array.forEach(function(element) {
//         this.sum += element;
//         this.Count++;
//     },this)
// };

// let count = new count();
// count.add([1, 2, 3]);
// console.log("break", count.sum);//comment on ivas grace au .

