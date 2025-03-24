console.log(window);

//welcome to js

//variables: variables are containers that hold the data types

/**
 * 
 * var num1 =1;
var Name='John';//string

//var is now deprecated because it messes with the scope
let var2 = 1233; //number

const welcomeText = 'welcome to my place';



console.log(welcomeText);

let concat1 = num1 + Name;
console.log(concat1);
const DB_NAME = 'localhost';

let isAwake = true;

let names = [
    {
        name:'john',
        age:'21'
    },
    {
        name:'mary',
        age:'24'
    },
    {
        name:'smith',
        age:'25'
    },
];

x = 10;

y=15

z= 20
//changed
z=12;

x=20
y=15


function localVar(){
    x =23;
    y =24;
    var2 = 'wdwmkdwladm'
    console.log(x,y,var2)
}

localVar()
console.log(x,y,z);



//number
//string | integer
//boolean
//arrays
//functions
//objects
//null
//class
//symbols
 */

/**let and const */
var y;
let _userId = 1;

const Db_ID = 124243123;

//the data types

let num = 12345;

let str = '12345'

let bool = true | false;

let obj = {};

let fns = () => { }

let arr = [];


let Null = null;
let Undefine = undefined;

//number: in js we do not have floating,decimals everything is an integer or number;
let price = 22.5;

let figure = 222345323;

let num1, num2;

num1 = 10

num2 = 20

console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 / num2);


//strings literals: '',"", ``-bactick string

let myname = 'my name is pleasant';
let occupation = " i am programmer";
let hobby = ` and i love reading`;

let myJob = document.querySelector('.my-job')

console.log(myname + ' ' + occupation + ' ' + hobby);

let myStr = `${myname} ${occupation} ${hobby} `;

myJob.innerHTML = myStr;

//string methods

console.log(myStr.length);
console.log(myStr.substring(2, 10));

//booleans :true | false

ifTrue = false;

if (ifTrue) {
    setTimeout(() => { console.log('the value is true') }, 2000)
} else {
    console.log('the value is false')
}

//objects literals :{}

let obj1 = {
    surname: 'james',
    age: 23,
    hobbies: ['reading', 'praying', 'camping'],
    isMarried: true,
}

//we can access the properties of this object

console.log(obj1.age);
console.log(obj1.hobbies.map(hobby => hobby));
console.log(obj1.isMarried);

if (obj1.isMarried !== true) {
    myJob.classList.remove('my-job');
} else {
    myJob.classList.add('my-job');
}

//function function fnname(){},()=>,()=>{}


// returing a value:traditional function
function fname(a, b) {//params
    return console.log(a + b);

}

fname(2, 2)//arguments

//runing a piece of code : the arrow function

const sayMyName = () => {
    console.log('hello james');
}

sayMyName();

//callback fns

const showBtn = document.querySelector('.show-btn')// this gets the element with the class of show-btn
const hideBtn = document.querySelector('.hide-btn');
const Paragraph = document.querySelector('.paragraph');

showBtn.addEventListener('click', () => {
    Paragraph.classList.remove('hidden')
    Paragraph.classList.add('show')
})
hideBtn.addEventListener('click', () => {
    Paragraph.classList.remove('show')
    Paragraph.classList.add('hidden')
})

//Arrays: arrays are zero based and is a collection of like or unlike data types

let Fruits = ['mango', 'cashew', 'banana', 'pea'];

//Array methods;



const ul = document.querySelector('.fruit-list');


Fruits.map(fruit => {
    let li = document.createElement('li');
    li.textContent = fruit;
    ul.append(li)
})

//create a COUNTER 

let counterarea = document.querySelector('.counter-area');
let add = document.querySelector('.increment');
let remove = document.querySelector('.decrement');
let counterNum = 0;

add.addEventListener('click', () => {
    counterNum++;
    counterarea.innerHTML = counterNum;

});
remove.addEventListener('click', () => {
    counterNum--;
    counterarea.innerHTML = counterNum;
});

//create a card a movie card using html css and then use js to hide and show it
console.log(document)

let x = document.querySelector('#my-text');

let QuerySelectorAll = document.querySelectorAll('.red');


console.log(QuerySelectorAll)

console.log(x);

//creating and adding attributes to an image tag

let img = document.createElement('img');

img.alt = 'this alt attribute is coming from javascript';

img.src = '../assets/image.jpg';
img.style.backgroundColor = 'red';
img.style.marginTop = '2rem';

console.log(img)//debug
let imageContainer = document.querySelector(".img-container");

imageContainer.appendChild(img)

//the document methods


//getting a single element from a node list

let QuerySelector2 = document.querySelectorAll('p.intro');

console.log(QuerySelector2)

QuerySelector2[1].style.backgroundColor = 'green';
QuerySelector2[1].innerHTML = 'i am part of a node list';
QuerySelector2[3].nextElementSibling.textContent = 'i am a next sibling';
QuerySelector2[3].nextElementSibling.style.backgroundColor = 'yellow';


//object

const Person = {
    name: 'John',
    personality: 'jovial',
    walk: () => {
        setTimeout(() => {
            console.log('i am working')
        }, 3000)
    },
    dance: () => {
        setTimeout(() => {
            console.log('i am dancing')
        }, 1000)
    }
}

console.log(Person.name)
console.log(Person.dance());
console.log(Person.walk());

const books = [
    {
    id: '1',
    title: 'title one',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora.',
    date: new Date().getDate()
    },
    {
    id: '2',
    title: 'title two',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora.',
    date: new Date().getDate()
    },
    {
    id: '3',
    title: 'title three',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora.',
    date: new Date().toISOString()
    },
];

let bookList = document.querySelector('.book-list');

books.map(({title,description,date}) =>{
    let book = document.createElement('div');
    book.className = 'book';

    book.innerHTML = `
    <h1>${title}</h1>
    <p>${description}</p>
    <p> created at ${date}</p>
    `
    bookList.appendChild(book);
});

const BOOKS =[
    {
        id:'1',
        title:'title one',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora.',
        date: new date().toISOString()
    },

    {
        id:'1',
        title:'title one',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora.',
        date: new date().toISOString()
    },

    {
        id:'1',
        title:'title one',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora.',
        date: new date().toISOString()
    }
]

let bookLists = document.querySelector('.book-list')
BOOKS.map(({title, description, date})=> {
    let book = document.createElement('div')
    book.className = 'book'

    book.innerHTML = `
    <h1> ${title}}</h1>
    <p> ${description}}</p>
    <p> ${date}}</p>
    
    `
    booklist = document.appendChild(book)
})























