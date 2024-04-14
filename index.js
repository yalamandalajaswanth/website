//console.log("I like pizza");
//console.log("its really good");
//window.alert("I really like pizza");
//comment with double slash
/* multi line
comment
just 
like
java
*/
//variable declaration: var, const, let
//using let is better practice cuz of scope

/*
let age=10; //numbers
let firstName = "Jaswanth"; //strings
let student=true; //boolean
age+=1;


console.log("hello", firstName);
console.log("you are", age ,"years old");
console.log("Enrolled", student);
document.getElementById("p1").innerHTML = "Hello "+firstName;
document.getElementById("p2").innerHTML = "you are "+age+" years old";
document.getElementById("p3").innerHTML = "enrolled "+ student;
*/


//arithmetic:
//let students = 20;
//students+=1;
//console.log(students);

//accepting user input:
//let name = window.prompt("enter name");
//console.log(name);
//let username=0;
//document.getElementById("myButton").onclick = function(){
//username+=parseInt(document.getElementById("myName").value);
//document.getElementById("myLabel").innerHTML=username;
//}

//type conversion:

//we can use Number() to convert string to number.
/*
let age = window.prompt("enter age");
console.log(typeof age);
age=Number(age);
y=String(3.14);
z=Boolean("");
k=Boolean("jash");
console.log("age",age,typeof age);
console.log("y",y,typeof y);
console.log("z",z,typeof z);
console.log("k",k,typeof k);
age+=1;
console.log(age);
*/


//const keyword and constants:
/*
let pi = 3.14159;
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle");
radius=Number(radius);
pi=429;
circumference= 2*pi*radius;
console.log(circumference);
*/
//prints 1716 to console


/*
const PI = 3.14159;
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle");
radius=Number(radius);
PI=429;
circumference= 2*pi*radius;
console.log(circumference);
*/

//Math functions:


/*
let x = Math.round(3.14);
x=Math.ceil(3.14);
x=Math.floor(3.14);
x=Math.pow(3,2);
x=Math.sqrt(49);
x=Math.abs(-3.14);
let y=5;
let z=9;
let maximum;
let minimum;
maximum=Math.max(y,z);
minimum=Math.min(y,z);

x=Math.PI;
//console.log(maximum);
//console.log(minimum);
console.log(x);
*/

/*
let a;
let b;
let c;
a=Number(window.prompt("enter a"));
b=Number(window.prompt("enter b"));
c=(a**2+b**2)**0.5;
console.log("side C:",c);
*/

/*
let a;
let b;
let c;
document.getElementById("myButton").onclick=function(){
    a=Number(document.getElementById("sideA").value);
    b=Number(document.getElementById("sideB").value);
    c=(a**2+b**2)**0.5;
    document.getElementById("sideC").innerHTML=c;
}
*/

//counter program:
//decrease, reset, increase 3 buttons;

/*
let counter=0;
document.getElementById("decrease").onclick=function(){
    counter-=1;
    document.getElementById("myLabel").innerHTML=counter
}
document.getElementById("increase").onclick=function(){
    counter+=1;
    document.getElementById("myLabel").innerHTML=counter
}
document.getElementById("reset").onclick=function(){
    counter=0;
    document.getElementById("myLabel").innerHTML=counter
}
*/


//RANDOM NUMBER GENERATOR:


/*
let randomNumber;
document.getElementById("generate").onclick=function(){
    randomNumber=Math.floor(6*Math.random())+1;
    document.getElementById("myLabel").innerHTML=randomNumber;
}
*/
/*
//STRING PROPERTIES AND METHODS:
let userName="Jaswanth Yalamandala";
console.log(userName.slice(0,9));
let nameLength=userName.length;
let phone="716-520-9284";
console.log(nameLength);
console.log(userName[3]);
userName=userName.trim();
userName=userName.toLowerCase();
userName=userName.toUpperCase();
phone=phone.replaceAll("-","");
userName=userName.charCodeAt(0);
userName=String.fromCharCode(65);
console.log(phone);
console.log(userName);
*/

//METHOD CHAINING:
/*
let name="jaswanth Yalamandala"
let letter=name.charAt(0).toUpperCase().trim();
console.log(letter);
*/

//IF STATEMENTS:

//CHECKED PROPERTY:
/*
document.getElementById("submit").onclick=function(){
    const myCheckBox=document.getElementById("myCheckBox" );
    const visaBtn=document.getElementById("visa");
    const mastercard=document.getElementById("mastercard");
    const rupay=document.getElementById("rupay");
    if(myCheckBox.checked){
        console.log("you are subscribed");
    }
    else{
        console.log("not subscribed");
    }
    if(visaBtn.checked){
        console.log("visaBtn")
    }
    else if(mastercard.checked){
        console.log("mastercard btn");
    }
    else if(rupay.checked){
        console.log("rupaai");
    }
    else{
        console.log("why no check??");
    }
}
*/

//Below are same as in C lang:

//SWITCH STATEMENT:
// and - && or- ||
//WHILE loop, do while loops
//FOR loops
//break and continue statements
//nested loops:
// you can give radio buttons same name if you want them to be in the same class

//Nested loop pring rectangle:

/*
let row=window.prompt("enter length of rect");
let column=window.prompt("enter width of rect");
for(let i=0; i<row;i+=1){
    for(let j=0;j<column;j+=1){
        document.getElementById("myLabel").innerHTML+='$';
    }
    document.getElementById("myLabel").innerHTML+="<br>";
}
*/

//FUNCTIONS:
//in JS function overloading means it uses the last defined function. doesnt use based on
//number of arguments given.
/*
function happybirthday(){
    console.log("happy birthday");
}
happybirthday();
function happybirthday(username,age){
    console.log("happy birthday ",username);
    console.log("you are",age," years old");
}
happybirthday("jaswanth",21);
*/

//RETURN statement
//TERNARY OPERATOR

//var and let difference:
//let variables are limited to block scope {}
//var variables are limited to a function (){}

/*
function dosomething(){
    for(var i=0;i<10;i+=1){
        console.log(i);
    }
    console.log(i);
}
dosomething();
console.log(i);
*/

//var global variables WILL CHANGE browser's window properties
//using let is good practice

//Template Literals:
//allows embedded variables and expressions: delimited with (`)
/*
let name="Jash";
let items=3;
let cost=98;
let text = `Hello ${name} you have ${items} items in your cart it costs you ${cost} dollars`;
console.log(text);
*/

//${variable_name} to embed variable.



//toLocaleString()--used for currencies, percents, languages
//let myNum=100
//myNum=myNum.toLocaleString("hi-IN");
//myNum=myNum.toLocaleString("en-US");
//myNum=myNum.toLocaleString("de-DE");

//myNum=myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
//myNum=myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
//myNum=myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

//myNum=myNum.toLocaleString(undefined, {style: "percent"});

//myNum=myNum.toLocaleString(undefined, {style: "unit", unit: "gram"});


//console.log(myNum);

//Number Guessing Game:
/*
let number=parseInt(10*Math.random()+1);
let guesses=0;
document.getElementById("submitButton").onclick=function(){
    guesses+=1;
    let correct= `YAY that's right. you got it in ${guesses} guesses`;
    let guess = document.getElementById("guess").value;
    if(number== guess){
        document.getElementById("result").innerHTML=correct;
    }
    else if (number> guess){
        document.getElementById("result").innerHTML="too small";
    }
    else{
        document.getElementById("result").innerHTML="too big";
    }
}
*/

//TEMP Conversion program:

/*
function celtofar(temp){
    return (9/5)*(temp)+32;
}
function fartocel(temp){
    return (5/9)*(temp-32);
}
document.getElementById("submit").onclick= function (){
    let entered = Number(document.getElementById("temp").value);
    let fchecked=document.getElementById("farenheit").checked;
    let cchecked=document.getElementById("celsius").checked;
    if (fchecked){
        document.getElementById("result").innerHTML=celtofar(entered)+"°f";
    }
    else if (cchecked){
        document.getElementById("result").innerHTML=fartocel(entered)+"°c";
    }
    else{
        document.getElementById("result").innerHTML="bruh";
    }
}
*/

//ARRAYS: can store multiple values:

/*
let fruit=["banana","apple","orange"];
for (let i=0;i<fruit.length;i+=1){
    console.log(fruit[i]);
}

fruit.push("pear"); // push is like append in python
fruit.pop() //removes last
fruit.unshift("mango");
fruit.shift();//delete first
//console.log(fruit.indexOf("apple"));
//console.log(fruit);
for(let i of fruit){//iterate over arrays.
    console.log(i);
}
*/

//sort
/*
let fruit=["banana","apple","orange","mango"];
fruit=fruit.sort().reverse();
for(let i of fruit){
    console.log(i);
}
*/
//2D array:

/*
let fruits = ["apple","banana","orange"]
let vegetables = ["ocra","spinach","carrot"]
let meat = ["chicken","fish"]
let groceries=[fruits,vegetables,meat];

for (let list of groceries){
    for (let items of list){
        console.log(items);
    }
}
*/

//spread operator:
//when one more more values expected, use it on array or a string
/*
let arr=[1,2,3,4,5,6,7,8,9,10]
let name="Jaswanth Yalamandala"
//console.log(...arr);
console.log(...name);
let maximum=Math.max(...arr);
//console.log(maximum);
let arr2=[11,12,13,14,15,16,17];
arr.push(...arr2)
console.log(...arr)
*/

//rest parameters:

/*

let a=1
let b=2
let c=3
let d=4
let e=5

function sum(x,y,...numbers){
let res=x+y;
for(let number of numbers){
    res+=number
}
return res;
}
console.log(sum(a,b,c,d,e));
*/

//CALLBACKS: a function passed as argument to another function:
//it ensures that a function is not going to run before
//a task is completed.
//helps us develop asynchronous code
//(When one func has to wait for another func)
//That helps us avoid errors like when waiting for file.

/*
let x=3
let y=4
sum(x,y,printConsole);
sum(x,y,toDOM);
function sum(x,y,callBack){
    let res=x+y;
    callBack(res);
}
function printConsole(output){
    console.log(output);
}
function toDOM(output){
    document.getElementById("myLabel").innerHTML+=output;
}
*/

//array.forEach() --calls a callback function for each 
//                  array element
/*
let students=["venkat","sanjeev","jaswanth","vishnu"];
students.forEach(capitalize);
students.forEach(printed);
function capitalize(element,index,array){ //it provides element, index and array---
    array[index]=element[0].toUpperCase()+element.substring(1);
}

console.log(students);
function printed(element){
console.log(element);
}
*/

//array.map(): calls a callback function once per each
// element in the array AND creates a new array.
/*
let numbers=[1,2,3,4,5,6,7,8,9,10]
let squares = numbers.map(square); //very similar to python
squares.forEach(print)
let cubes=numbers.map(cube);
function square(element){
    return element**2;
}
function cube(element){
    return element**3
}
function print(element){
    console.log(element)
}
*/

//Filter method:
//creates new array with all elements that pass the test
//provided by a function.

/*
let ages=[19,18,17,20,30,16,42]
let adults = ages.filter(filterage);
adults.forEach(print);
function filterage(age){
    return age>=18; // this is the test: only elements above 18 pass
}
function print(element){
    console.log(element);
}
*/

//REDUCE method:
//array.reduce: reduces an array to a single value:

/*
let prices=[80,70,50,10]
let tots=prices.reduce(total);
console.log(`total is $${tots}`);
function total(total,element){
    return total+element;
}
*/

//sort using callbacks:

/*
let scores=[100,80,43,70,60,83]
//if you directly use sort. it will sort lexicographically.
scores=scores.sort(descending);
function ascending(x,y){
    return x-y;
}
function descending(x,y){
    return y-x;
}
scores.forEach(print)
function print(element){
    console.log(element);
}
*/

//Function expression: anonymus function:
//Can write it and forget about it.
//doesnt spoil the global scope with names:

//const func=function (){console.log("hello");}
//func();

//Arrow Function Expression:
/*
const func = () => console.log("Heyyaa");
func();

const percent = (a,b) => (b/a)*100;
console.log(percent(20,5))
*/

/*
let scores=[100,80,43,70,60,83]

scores=scores.sort((x,y)=>x-y);
scores.forEach((element)=>console.log(element));
*/

//SHUFFLING THE CONTENTS OF AN ARRAY:

/*
let cards =["A","1","2","3","4","5","6","7","8","9","10","J","K","Q"];
cards=shuffle(cards);
cards.forEach((element)=>console.log(element));
function shuffle(arr){
    let currentIndex = arr.length-1;
    while(currentIndex>0){
        let shuff=Math.floor(Math.random()*arr.length);
        let temp=arr[currentIndex];
        arr[currentIndex]=arr[shuff];
        arr[shuff]=temp;
        currentIndex-=1;
    }
    return arr;
}
*/

//NESTED FUNCTIONS: adds security. inner functions cannot be accessed outside.
/*
let UserName = "Jash";
let UserInbox = 0;
login();
function login(){
displayusername();
displayInbox();
function displayusername(){
    console.log(`Welcome ${UserName}`);
    }

function displayInbox(){
        console.log(`You have ${UserInbox} new messages`)
    
    }

}
*/

//MAP- dictionaries:
/*
const store = new Map([
    ["t-shirt", 20],
    ["shirt",10],
    ["pants",30],
    ["UW",5]
]);
console.log(store.get("t-shirt"));
store.set("hat",40);
//store.delete("hat");
console.log(store.size);
console.log(store.has("hat"));
store.forEach((value,key) => console.log(`${key} $${value}`));
*/

//OBJECT ORIENTED PROGRAMMING:
/*
const car = {
color : "blue",
model : "Nissan",
year : 2019,

brake : function(){console.log(`you should brake the ${this.model}`)},//this uses the immediate context.
drive : function(){console.log("car is to be driven")}
}
console.log(car.color);
console.log(car.model);
console.log(car.year);
car.drive();
car.brake();
*/

/*
class Player{
score = 0;

pause(){
console.log("you paused the game");
}

exit(){
console.log("you exited the game");
}
}

const player1 = new Player();
console.log(player1.score);
player1.pause();
player1.exit();

const player2 = new Player();
console.log(player1.score);
player2.pause();
player2.exit();

//CONSTRUCTOR:
class Student{
    constructor(name,age,score){
        this.name=name;
        this.age=age;
        this.score=score;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}
const student1= new Student("spongebob","30",3.2);
console.log(student1.name,student1.age,student1.score);
student1.study();
*/

//STATIC method: static belongs to the class and not the object:
/*
class Cars{
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Cars.numberOfCars+=1;
    }
    static startRace(){
        console.log("3..2..1..GO");
    }
}

const car1 = new Cars("nissan");
const car2 = new Cars("BMW");
const car3 = new Cars("Aston Martin");

console.log(Cars.numberOfCars);
Cars.startRace();
*/
//we can call static methods and properties without creating an object:

//INHERITANCE:
/*
class Rabbit{
    alive = true;
    name = "rabbit";

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish{
    alive = true;
    name = "Fish";

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}


class Hawk{
    alive = true;
    name = "Hawk";

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}
*/
/*
class Animal{
alive = true;

eat(){
    console.log(`This ${this.name} is eating`);
}

sleep(){
    console.log(`This ${this.name} is sleeping`);
}

}
class Rabbit extends Animal{
    name = "rabbit";    
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "Fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "Hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.sleep();
rabbit.eat();
rabbit.run();
console.log(rabbit.alive);
*/

//SUPER keyword: commonly used to invoke the constructor of a parent class. Refers to the parent class.
/*
class Animal{
constructor(name,age){
    this.name=name;
    this.age=age;
}
}
class Rabbit extends Animal{
constructor(name,age,runSpeed){
    super(name,age);
    this.runSpeed=runSpeed;
}
}
class Hawk extends Animal{
    constructor(name,age,flySpeed){
    super(name,age);
    this.flySpeed=flySpeed;
    }
}
class Fish extends Animal{
    constructor(name,age,runSpeed){
    super(name,age);
    this.runSpeed=runSpeed;
    }
}
const rabbit = new Rabbit("rooroo",10,20);
const hawk = new Hawk("hoo",2,30);
const fish = new Fish("soo",3,40);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.runSpeed);
*/

//GETTERS AND SETTERS:
/*
class Cars{
    constructor(power){
        this._power=power;
        this._gas=25;
    }
    get power(){
        return `${this._power}hp`;
    }
    get gas(){
        return `${this._gas} (${this._gas / 50*100})`;
    }
    set gas(gas){
        if(gas>50){
            this._gas=50;
        }
        else if(gas<0){
            this._gas=0;
        }
        else{
        this._gas=gas;
        }
    }
}
const car = new Cars("400");
console.log(car.power);
console.log(car.gas);
car.gas = 20;
console.log(car.gas);
*/

//anonymous objects:
/*
class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}
let card1=new Card("A","hearts");
let card2 = new Card("A","spades");
let card3 = new Card("J","hearts");
let card4 = new Card("1","clubs");
let card5 = new Card("4","spades");
let card6 = new Card("6","clubs");
let card7 = new Card("8","spades");
let card8 = new Card("10","heart");

let cards = [card1,card2,card3,card4,card5,card6,card7,card8];

for(const card of cards){
    console.log(card.value+card.suit);
}
*/
/*
class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}
let cards= [new Card("A","hearts"),new Card("A","spades"),new Card("J","hearts"),new Card("1","clubs"),new Card("4","spades"),
new Card("6","clubs"),new Card("8","spades"),new Card("10","heart")
]

cards.forEach((element)=>console.log(`${element.value} ${element.suit}`));
*/
//TRY, CATCH, THROW, FINALLY.
/*
//setTimeout:setTimeout(callback,timeout)//executes callback after timeout milli seconds.
//clearTimeout(timeoutID) can be used to cancel a timeout before it executes.
let timer1=setTimeout(sellingC,3000);//async function doesnt pause execution of the program;
function sellingC(){
    alert("Buy this NOW!");
}
*/
//setInterval(callback, interval): calls the callback function once every interval time, infinitely.

//array and object destructuring; google

//Date(year, month, day, hour, minute, second, milli second)--accepts:
/*
let date = new Date();//pass no args for current date and time.
console.log(date);

let date1 = new Date(2024,0,10,2,5,10,3);
console.log(date1)
console.log(date1.getFullYear()); //gets year
console.log(date1.getMonth());//gets month
console.log(date1.getDate());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());
//all of the above also have set methods to set year, month, date, hours, minutes, seconds.
//dates can be compared date1>date2 - date1 is more recent if that is true.
*/
//closures: function defined inside another function. inner function has access to variables and scope of outer function.
//allows for private variables and state maintainance. used very much in frameworks like react, vue, angular.
/*
function outer(){
    let message="hello";
    function inner(){
        console.log(message);
    }
    inner();
}
outer();

function createGame(){
    let score=0;
    function increaseScore(){
        score+=1;
    }
    function decreaseScore(){
        score-=1;
    }
    function getScore(){
        return score;
    }
    return {increaseScore,decreaseScore,getScore};
}
let game=createGame();
game.increaseScore();
game.increaseScore();
console.log(game.getScore());
*/
//DIGITAL CLOCK
/*
function updateTime(){
let date=new Date();
const hour=date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
document.getElementById("clock").innerHTML=`${hour}:${minutes}:${seconds}`;
}
setInterval(updateTime,1000)
*/
//STOPWATCH PROJECT:
/*
let start=document.getElementById("start");
let stop1=document.getElementById("stop");
let reset=document.getElementById("reset");
let stopwatch=document.getElementById("stopwatch");
let id;
let isStarted=false;
let elapsedTime=0;
let startTime=null;
//let ms=0;
function update() {
    const currentTime = new Date();
    elapsedTime=currentTime-startTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const hoursRemainder = elapsedTime % (1000 * 60 * 60);
    const minutes = Math.floor(hoursRemainder / (1000 * 60));
    const minutesRemainder = hoursRemainder % (1000 * 60);
    const seconds = Math.floor(minutesRemainder / 1000);
    const milliseconds = Math.floor(minutesRemainder % 1000);
    stopwatch.innerHTML=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}

start.onclick=()=> {
if(!isStarted) {
startTime= new Date()-elapsedTime;
id = setInterval(update,10)
isStarted=true;
}
}
stop1.onclick = ()=> {
clearInterval(id);
elapsedTime=new Date() - startTime;
isStarted=false;
}

reset.onclick = () => {
    clearInterval(id);
    stopwatch.innerHTML="00:00:00:00"
    startTime=null;
    isStarted=false;
    elapsedTime=0;
}
*/
//TITLE:
//ES6 MODULES: can create reusable code. functions, classes, variables, and more. 
//inorder to import MathUtils, we need to make index.js a module. to do so, we have to give type attribute as module in script tag in html.
/*
import {PI,getCircumference,getArea,getVolume} from './MathUtiils.js';
console.log(PI);
const circumference = getCircumference(5);
console.log(circumference);
const area =getArea(5);
const volume = getVolume(5);
console.log(circumference,area,volume);
*/

//Synchronous and Asynchronous: 
/*
//Sync = one after other, async = program executes normally while some code isnt:
//setTimeout is one of many async functions. to execute some statements synchronously, you use callbacks, promises, async/await:
setTimeout(()=>{console.log("task1");callback()},3000);
//console.log("task2");
//console.log("task3");
//console.log("task4");
//below we use callback to make task1 execute after all other tasks;
function callback(){
console.log("task2");
console.log("task3");
console.log("task4");
}
*/

//DOM: object represents the page you see in the web browser and provides an api to interact with it. web browser
//constructs the DOM when it loads an HTML document. and structures all elements in a tree like representation.
//Javascript can access the dom dynamically, change the content, structure, style of a web page.
//getElementById() //element or null
//getElementsByClassName() //HTML collection or null
//querySelector() //HTML collection or null
// querySelectorAll() //nodelist;

//DOM Navigation:
//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

//CAN add, remove, html elements from javascript:

//create element:
//const newH1=document.createElement("h1");

//add attributes/properties:
//newH1.textContent = "Hello Javascript!";
//newH1.id = "myH1";
//newH1.style.color = "tomato";
//newH1.style.textAlign = "center";

//APPEND TO DOM:

//document.body.append(newH1); //adds at the end
//document.body.prepend(newH1); //adds at the beginning
//documemnt.getElementById("box1").append(newH1) //adds inside of box1 container;
//insertBefore// you can insert before an element:
//const element = document.getElementById("box1");
//document.body.insertBefore(element);
//const boxes = document.querySelectorAll("boxes");
//document.body.insertBefore(newH1,boxes[0]);

//REMOVE element:
//document.getElementById("box1").removeChild(newH1);
//console.log("hello");

//PROTOTYPAL INHERITANCE:
/*
let object = {
    name: "Jaswanth",
    city: "Khammam",
    dosomething: function(){
        console.log(`${this.name} is my name and im from ${this.city}`);
    }
}

object.dosomething();
console.log(object.__proto__);
console.log(Object.prototype);
let arr=["jash","lahari"];
console.log(arr.__proto__);
console.log(Array.prototype);
console.log(Array.prototype.__proto__);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

let object2 = {
    name: "lahari"
}

object2.__proto__ = object;

console.log(object2.city);
console.log(object2.name);

Function.prototype.logbish = ()=>console.log("phuck you");
function fun(){
return 0;
}
console.log(fun.logbish());
*/

//EVENT LISTNERS:
//MOUSE EVENTS:
/*
let box = document.getElementById("container");
let event1 = "click";
let callback1 = event=>{event.target.style.backgroundColor="tomato";
event.target.textContent = "OUCH!";
}
box.addEventListener(event1,callback1); //this is how you call add an event listner;
box.addEventListener("mouseover",event => {
    event.target.style.backgroundColor= "yellow";
    event.target.textContent= "dont do it";
})
box.addEventListener("mouseout",event => {
    event.target.style.backgroundColor= "aqua";
    event.target.textContent= "mybox";
})
*/

//KEYBOARD:
/*
let y=0;
let x=0;
let moveAmount=100;
let box = document.getElementById("container");
document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case("ArrowUp"):
            y-=moveAmount;
            break;
            case("ArrowDown"):
            y+=moveAmount
            break;
            case("ArrowLeft"):
            x-=moveAmount;
            break;
            case("ArrowRight"):
            x+=moveAmount
            break;
        }
        box.style.marginTop=`${y}px`;
        box.style.marginLeft = `${x}px`;
    }
});
*/
//CLASSLIST: used to interact with the class list of an element:
//add(), remove(), toggle(), replace(), contains(),

//CALLBACK hell: callbacks are used to handle async code, but it makes it difficult after a certain point.
//ex:
/*
function task1() {
    setTimeout(()=>
    console.log("task1"),3000);
} 
function task2() {
    setTimeout(()=>
    console.log("task2"),1500);
} 
function task3() {
    setTimeout(()=>
    console.log("task3"),1200);
} 
function task4() {
    setTimeout(()=>
    console.log("task4"),2000);
} 
function task5() {
    setTimeout(()=>
    console.log("task5"),1700);
} 
task1();
task2();
task3();
task4();
task5();
console.log("all tasks done");
*/

//if you want all the tasks to execute in order, give pass them callbacks.
/*
function task1(callback) {
    setTimeout(()=>{
    console.log("task1");
    callback();
},3000)
    
} 
function task2(callback) {
    setTimeout(()=>{
        console.log("task2");
        callback();
    },3000)
        
    } 
function task3(callback) {
    setTimeout(()=>{
        console.log("task3");
        callback();
    },3000)
        
    } 
function task4(callback) {
    setTimeout(()=>{
        console.log("task4");
        callback();
    },3000)
        
    } 
function task5(callback) {
    setTimeout(()=>{
        console.log("task5");
        callback();
    },3000)
        
    } 

task1(
    ()=>{task2(
        ()=>{
            task3(
                ()=>{
                    task4(
                        ()=>{task5(
                            ()=>console.log("all tasks executed")
                        )}
                    )
                }
            )
        }
    )}
);
*/
//PROMISES: an object that manages asynchronous operations. Wrap a promise around asynchronous code. "I promise to return a value". 
//Pending --> RESOLVED OR REJECTED. new Promise((resolved,reject)=> {asynchronous code})

//promises can either be resolved or rejected.
/*
function task1() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let flag=true;
    if(flag)
    resolve("task1");
    else
    reject("task 1 failed");
}
    ,3000);
});
}
function task2() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let flag=false;
    if(flag)
    resolve("task2")
    else
    reject("task2 is failed")
    },1500);
});
} 
function task3() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
    resolve("task3"),1200);});
} 
function task4() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
    resolve("task4"),2000);});
} 
function task5() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
    resolve("task5"),1700);});
} 

task1().then(value => {console.log(value); return task2()})
        .then(value =>{console.log(value); return task3()})
        .then(value =>{console.log(value); return task4()})
        .then(value =>{console.log(value); return task5()})
        .then(value =>{console.log(value);})
        .catch(error => console.log(error));
*/

//ASYNC AND AWAIT:
//allows us to write asynchronous code in a synchronous manner. 
//Async = makes a function return a promise.
//Await = makes an asynchronous function wait for a promise.
/*
function task1() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let flag=true;
    if(flag)
    resolve("task1");
    else
    reject("task 1 failed");
}
    ,3000);
});
}
function task2() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let flag=false;
    if(flag)
    resolve("task2")
    else
    reject("task2 is failed")
    },1500);
});
} 
function task3() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    let flag=true;
    if(flag)
    resolve("task3")
    else
    reject("task 3 didnt happen");
    }
    ,1200);});
} 
function task4() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
    resolve("task4"),2000);});
} 
function task5() {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
    resolve("task5"),1700);});
} 

async function doAllTasks() {
try{
const t1=await task1();
console.log(t1);
const t2=await task2();
console.log(t2);
const t3=await task3();
console.log(t3);
const t4=await task4();
console.log(t4);
const t5=await task5();
console.log(t5);
}
catch(error){
    console.error(error);
}
}
doAllTasks();
*/

//JSON 
//use json.stringify to convert js object to a json string
// use json.parse() to convert json string to a js object.

//FETCH:
//fetch returns a promise. response.json, also returns a promise. soo they can be then chained.
/*
fetch("peopleObj.json").then(response => response.json())
                    .then(items => items.forEach(element => {
                        console.log(element.name);
                    }))
                    .catch(error=>console.error(error));
*/
//Fetch function is used for making HTTP requests to fetch resources.
//simplifies asynchronous data fetching in javascript. used to interect with APIs to retrieve and send data 
//asynchronously over the web.
//fetch(url, {options})
//POKEMON API:
/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response=>response.json())
    .then(element => console.log(element.id))
    .catch(error=>console.error(error));
*/
/*
function genPokemon(){
    let name=document.getElementById("pokemonName").value.toLowerCase();
    let p=document.getElementById("pokemonsprite");
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response=>response.json())
    .then(elements => p.src= elements.sprites.front_default);
}
*/
/*
async function genPokemon(){
    let name=document.getElementById("pokemonName").value.toLowerCase();
    let p=document.getElementById("pokemonsprite");
    try{
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        response = await response.json();
        p.src=response.sprites.front_default;
    }
    catch(error){
        console.error(error);
    }

}
*/
