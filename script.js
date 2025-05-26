// INCLUDES


// let arr = [1,2,3,4,5];

// let b = arr.includes(2)

// console.log(b);


// let str = "sudhi"

// let b = str.includes("h")

//  console.log(b);

// STRING METHODS

// let str = "sudheesh "

// console.log(str.length);

// let str = "sudheesh "

// console.log(str.charAt(4));

// let str = "sudheesh "

// console.log(str.charAt(0).toUpperCase()+str.slice(1).toLowerCase())

//  let str = "sudheesh"
//  let str2 = "boyyyy"
//  console.log(str.concat(" "+str2))

// let str = "    hello Sudhi how are u   ";

// console.log(str.trim());

// let str = "sudhi";
// console.log(str.padEnd(10,"M"));

// let str = "sudhi";
// console.log(str.repeat(2));

// let str = "hai sudhi"
// console.log(str.replace("hai","Hey"));

// let str = "hey sudhi,how are you";
// console.log(str.split(","));

// const num1 = [1,2,3,4]
// const num2 = [5,6];

// const combi = [...num1,...num2]
// console.log(combi);

// let str = "Hi akhil, I am sudhi"
// let words = str.split(' ');
// let smallest = words[0];

// for(i=0;i<words.length;i++){
//     if(words[i].length<smallest.length){
//         smallest=words[i];
//     }
// }
// console.log(smallest);



// function shorttest(word){
//     return word.split(' ').reduce((current,short) => {
//         return current.length<short.length?current:short;
//     })
// }  

// let str = "Hi Sudhi"
// console.log(shorttest(str));

// let obj = {a:1,b:2,c:{d:3,e:4}}
// let shallow = {...obj};
// shallow.a = 3
// shallow.c.d = 5
// console.log(shallow);
// console.log(obj);

// let obj = {a:1,b:2,c:{d:3,e:4}}
// let deep = JSON.parse(JSON.stringify(obj))
// deep.a = 5
// deep.c.e = 8
// console.log(deep);
// console.log(obj);

// SET OBJECT 

// const mySet = new Set();

// // Adding values to set

// mySet.add(1);
// mySet.add(5);
// mySet.add(1); //Duplicate elements cannot be included
// mySet.add("Hi Hello")
// mySet.add({name:"sudhi",age:21})

// // to check the size of the array

// console.log(mySet.size); //Output : 4
// console.log(mySet.has(5));

// mySet.delete(5);
// console.log(mySet);

// const myArray = Array.from(mySet)
// console.log(myArray);

// mySet.clear();
// console.log(mySet);



// Reverse an array without using new array

// let arr = [1,2,3,4]
// for(i=0;i<arr.length/2;i++){
//     let temp = arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-i-1] = temp
// }

// console.log(arr);


// Remove Nth element from an array

// let arr = [1,2,3,4]
// let b = arr.pop()
// console.log(arr);

// using for loop

// let arr = [1,2,3,4]

// for(i=0;i<arr.length;i++){
//     if(arr[i] === arr[arr.length-1]){
//         arr.length = arr.length-1
//     }
// }

// console.log(arr);


// Remove duplicate elements from the array

// let arr = [1,2,2,3,4,5,4];
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j]){
//             for(k=j;k<arr.length;k++){
//                arr[k] = arr[k+1]
//             }
//             arr.length--;
//             j--;
//         }
//     }
// }

// console.log(arr);


//   let arr = [1,2,2,3,4,5,4];
//  let newarr = arr.filter((dupli,index) => arr.indexOf(dupli) === index)
// console.log(newarr);


// let arr = [1,2,2,3,4,5,4];
// let newarr = arr.reduce((acc,curr) => {
//     if(!acc.includes(curr)){
//        acc.push(curr);
//     }
//     return acc
// },[])

// console.log(newarr);

// Even numbers from an array

// let arr = [1,2,3,4,5,6]
// let even = []
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even.push(arr[i])
        
//     }
// }
// console.log(even);

// let arr = [1,2,3,4,5,6]
// let newarr = arr.filter((elem) => elem%2 == 0)
// console.log(newarr);

// Print duplicate fns

// let arr = [1,2,3,4,5,2,3,6]
// let duplicates = []
// for(let i = 0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             duplicates.push(arr[i])
//         }
//     }
// }

// console.log(duplicates);

// let arr =[1,2,3,4,5,2,3,6]
// let newarr = arr.filter((dupli,index) => arr.indexOf(dupli) !== index)
// console.log(newarr);

// Palindrome or not

// let str = "malayalam"
// let isPalindrome = true
// for(i=0;i<str.length/2;i++){
//     if(str[i]!==str[str.length-1-i]){
//         isPalindrome = false;
//         break;
//     }
// }

// console.log(isPalindrome);

// console.log(isPalindrome?"It is a palindrome":"Not a palindrome");


// pure fn vs impure fn

// function add(a,b){
//    return a+b;
// }
 
// console.log(add(5,2));


// let total = 0;
// function toaddTotal(value){
//     total += value
//     return total;
// }

// console.log(toaddTotal(5));
// console.log(toaddTotal(5));


// Array destructuring

// let arr = [1,2,3,4,5]
// let [fathah,b,c,...rest] = arr

// console.log(fathah);
// console.log(b);
// console.log(c);
// console.log(rest);

// Object destructuring

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// let {name,...rest} = person

// console.log(name);
// console.log(rest);


// Delete multiples of 3

// let arr = [1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%3===0){
//         for(let k=i;k<arr.length-1;k++){
//             arr[k]=arr[k+1];
//         }
//         arr.length--;
//         i--;
//     }
// }

// console.log(arr);


// Print multiples of 5

// let arr = [1,2,3,4,5,6,10]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%5===0){
//         console.log(arr[i]);
        
//     }
// }


// function currying 

// function add(a){
//    return function(b){
//         return a+b;
//     }
// }

// console.log(add(2)(4));



// Closure

// function makeCount(){
//     let count = 0;

//     return function(){
//         count++
//         return count;
//     }
// }

// let counter = makeCount()
// console.log(counter());
// console.log(counter());

// callback to find sum

// function outer(a,b,callback){
//      let sum = a+b
//      callback(sum)
// }

// function inner(result){
//    console.log(`sum is: ${result}`);
   
// }

// outer(1,2,inner)


//   Call Apply Bind

// let name = {
//     firstname:"sudheesh",
//     lastname:"ks"
// }

// let name2 = {
//     firstname:"muhammed",
//     lastname:"Fathah"
// }

// let printFullname = function(hometown,country){
//     console.log(this.firstname+" "+this.lastname+" from "+hometown+" in "+country);
// }

// printFullname.apply(name2,["Mumbai","India"])

// let fullName = printFullname()


// Prime numbers

// let n=17
// let isPrime = true
// let sum = 0
// for(let i = 0;i<Math.sqrt(n);i++){
//     if(n%i===0){
//         isPrime=false
//         break;
//     }else{
//         sum+=n
//     }
// }
// console.log(sum);


// Arrow function

// let add = (a,b) => a+b
// console.log(add(1,2))


// smallest odd number

// let arr = [2,3,1,4,5,6]

// let newarr = arr.reduce((acc,curr) => {
//     return (curr<acc&&curr%2!==0)?curr:acc;
// })

// console.log(newarr);


// Sum using Promise

// function printSum(a,b){
//     return new Promise((resolve,reject) => {
//         if(typeof(a) === "number" && typeof(b) === "number"){
//             let sum = a+b;
//             resolve(sum)
//         }else{
//             reject("error")
//         }
//     })
// }

// printSum(5,5)
//      .then((sum) => {
//         console.log(`sum is : ${sum}`);
        
//      })

//      .catch((error) => {
//         console.log(error);
        
//      })



// FIND PERSONs AGED LESS THAN 54 ( IN A OBJECT)

// let people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 45 },
//     { name: "Mike", age: 60 },
//     { name: "Sara", age: 50 }
// ];

// let Under54 = people.filter(person => person.age<54)
// console.log(Under54);


// Factorial

// let n = 5;
// let factorial = 1;
// for(let i = 1;i<n;i++){
//     factorial*=i
// }
// console.log(factorial);

// Second Largest Number

// let arr = [1,4,2,3,5,6]
// let largest = arr[0]
// let secondLargest = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         secondLargest=largest;
//         largest=arr[i]
//     }else if(arr[i]>secondLargest && arr[i]<largest){
//         secondLargest=arr[i]
//     }
// }
// console.log(secondLargest);
// console.log(largest);


// let arr = [1,2,3,4,5,6]
// let result = arr.reduce((acc,num) => {
//     let [largest,secondLargest] = acc;

//     if(num>largest){
//         secondLargest = largest;
//         largest = num;
//     }else if(num>secondLargest && num<largest){
//         secondLargest = num;
//     }
//     return [largest,secondLargest]
// },[arr[0],arr[1]])

// console.log(result[0]);

// Max number in the array

// let arr = [1,2,3,4,5,10,6]
// let max = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);

// let arr = [1,2,3,4,5,10,6]
// let max = arr.reduce((acc,curr) => {
//     return (curr>acc)?curr:acc;
// })
// console.log(max);


// let arr = [1,2,3,4,5,10,6]
// let sum = 0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }

// let avg = sum/arr.length;
// console.log(sum);

// let arr = [1,2,3,4,5,10,6]
// let sum = arr.reduce((acc,curr) => {
//     return acc+curr
// },0)
// let avg = sum/arr.length
// console.log(avg);

// Count even numbers

// let arr = [1,2,3,4,5,10,6]
// let count = 0
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         count++
//     }
// }

// console.log(count);


// Sum of object array

// let ab = [{ ab: [1, 2, 3, 4, 5, 1] }];

// let sum = ab[0].ab.reduce((acc,curr) => acc + curr)

// console.log(sum);


// Sum of flattened array

// let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

// let flatArray = nestedArray.flat(Infinity)
// let sum = flatArray.reduce((acc,curr) => acc + curr)
// console.log(flatArray);
// console.log(sum);

// Capitalize First letter

// const name = ['ronaldo','roman reigns']

// let altered = name.map((elem) => elem.replace(/r/,"R"))

// console.log(altered);


// Print only numbers

// let arr=[1,'r',2,'a',3,'s',4,'h']
// let newarr = arr.filter((elem) => typeof(elem) === "number")
// console.log(newarr);


// To remove null and undefined

// let arr= [1, '', 'hello', null, 'world', undefined, 42, NaN, 0];

// let newarr = arr.filter((elem) => elem)
// console.log(newarr);

// Largest string

// let arr = ['sudhi','arun','anand']

// let largest = arr.reduce((acc,curr) => (acc.length<curr.length)?curr:acc)
// console.log(largest);


// Sum of squares

// let arr = [1,2,3,4]
// let sum = 0

// for(let i=0;i<arr.length;i++){
//     sum += arr[i] ** 2
// }

// console.log(sum);

// let arr = [1,2,3,4]
// let newarr = arr.map((num) => num*num).reduce((acc,num)=> acc+num)
// console.log(newarr);


// First 10 even nos using generator fn

// function* even10(){
//     for(i=1;i<=20;i++){
//         if(i%2===0){
//             yield i;
//         }
//     }
// }

// const evenGenerator = even10();
// for(let j=1;j<=10;j++){
//     console.log(evenGenerator.next().value);

// }

// const arr=[1,2,3,null,4,undefined,5]

// let newarr = arr.map((elem) => (elem === 4)?40:elem)
// console.log(newarr);

// const arr=[1,2,3,null,4,undefined,5]

// for(i=0;i<arr.length;i++){
//     if(arr[i] === 4){
//         arr[i] = 40
//     }
// }
// console.log(arr);

// classes

// class person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hi I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// const person1 = new person("sudhi",21)

// person1.greet()

// HOISTING

// console.log(a);

// var a = 10;

// console.log(b);

// let b = 10;

// console.log(c);

// const c = 10;

// Higher order fn

// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function hai(){
//     console.log("hai");
    
// }

// hello(hai);

// DEFAULT PARAMETERS

// function welcome(name = "Guest"){
//       console.log(`hello ${name}`);
      
// }

// welcome()


// While and Do while

// let sum = 0
// let i = 1
// do{
//     console.log(i);
//     i++
// }while(i <= 10)


// -ve to +ve and vice versa

// let arr=[1,-2,-4,2,4,-6,]

// for(let i = 0;i<arr.length;i++){
//         arr[i] = -arr[i];
// }
// console.log(arr);

// let arr=[1,-2,-4,2,4,-6,]

// let altered = arr.map((num) => num = -num)
// console.log(altered);


// To check L using Promise

// function checkL(){
//     return new Promise((resolve,reject) => {
//         let str = "HELLO";
//         if(str.includes("L")){
//             resolve("string contains L");
//         }else{
//             reject("String does not contains L")
//         }
//     })
// }

// checkL()
//   .then((result) => {
//     console.log(result);
    
//   })
//   .catch((error) => {
//     console.log(error);
    
//   })


// Reversing Nested Array


// const arr = [[1, 2], [3, 4], [5, 6]];

// const reversed = arr.reverse().map(inner => inner.reverse())
// console.log(reversed);


// Largest Element in an array using reduce

// const arr = [10, 5, 30, 2];

// const largest = arr.reduce((acc,elem) => (acc > elem) ? acc : elem, -Infinity)

// console.log(largest)



// -----------------------------------------------NODE JS--------------------------------------------------------


// server Creation using HTTP

// const http = require('http')
// const fs = require('fs');

// http.createServer((req,res) => {
    
// }).listen(7800,()=>{
//     console.log("server started at port 7800");
// })

// Write file

// const express = require('express')
// const app = express();
// const fs = require('fs');


    // fs.writeFile('welcome.txt',"hello bro...",(err) => {
    //     if(err){
    //         console.log(err);
            
    //     }else{
    //         console.log("file appended successfully");
            
    //     }
    // })


// make directory

// fs.mkdir('hello',(err) => {
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("directory created");
        
//     }
// })


// Event loop priority

// console.log("start");

// setTimeout(() => {
//     console.log("hai");
    
// },0)

// setImmediate(() => {
//     console.log("hello");
    
// })

// process.nextTick(() => {
//     console.log("unniyettan first");
    
// })

// Middleware and routing

// const express = require('express')
// const app = express()
// const path = require('path')


// app.use((req,res,next) => {
//     console.log(new Date());
//     next()
// })

// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname,"index.html"))
// })

// app.get('/welcome',(req,res) => {
//     res.sendFile(path.join(__dirname,'welcome.txt'));
    
// })


// app.listen(7777,() => {
//     console.log("server started");
    
// })


// Path params


// const express = require('express')
// const app = express()

// app.get('/user/:id',(req,res) => {
//     let UserId = req.params.id
//     res.send(`UserId : ${UserId}`)
// })

// app.listen(7777,() => {
//     console.log("server started");
    
// })

// Query Params

// const express = require('express')
// const app = express()

// app.get('/user',(req,res) => {
//     let name = req.query.name
//     let age = req.query.age
//     res.send(`name: ${name} and age : ${age}`)
// })

// app.listen(7777,() => {
//     console.log("server started");
    
// })


// Current date in fs

// const express = require('express')
// const app = express();
// const fs = require('fs');

// const currentDate = new Date().toString();

//     fs.writeFile('welcome.txt',currentDate,(err) => {
//         if(err){
//             console.log(err);
            
//         }else{
//             console.log("file appended successfully");
            
//         }
//     })



// Error handling middleware

// const express = require('express')
// const app = express()
// const path = require('path')


// app.use((req,res,next) => {
//     console.log(new Date());
//     next()
// })

// app.get('/',(req,res) => {
//     res.send("hii brooo")
// })

// app.use((err,req,res,next) => {
//     console.log('An error occurred');
//     res.status(500).send('Something went wrong');
// })


// DOM ID

// var heading = document.createElement("h1");

// function create(){
//     heading.innerHTML = "Created successfully"
//     document.body.appendChild(heading);
// }

// function remove(){
//     heading.remove()
// }

//  Change color


// var heading = document.getElementById('head1')
// var btn = document.getElementById('btn');

// btn.addEventListener("click",changeColor);
// heading.addEventListener("mouseover",changeBg)

// function changeColor(){
//     heading.style.color = "red";
// }

// function changeBg(){
//     heading.style.backgroundColor = "yellow";
// }



// Delete last pair in an object

// const originalObject = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// };

// let key = Object.keys(originalObject);
// let lastkey = key[key.length - 1]

// delete originalObject[lastkey]

// console.log(originalObject);


// Sum of nested objects


// const nestedObject = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: 4
//         }
//     },
//     g: 5
// };

// let sum = 0;

// function findSum(obj){
//     for(let key in obj){
//         if(typeof(obj[key]) === "object"){
//             findSum(obj[key]);
//         }else{
//             sum += obj[key]
//         }
//     }
// }

// findSum(nestedObject)

// console.log(sum);


// Promise with async


// function fetchData(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully");
//         },2000)
//     })
// }

// async function getData(){
//     console.log("fetching Data...........");
//     let result = await fetchData();
//     console.log(result);
    
    
// }

// getData()


// clear Interval

// function sayHello(){
//     console.log("hello");
    
// }

// let intervalId = setInterval(sayHello,1000)

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("interval stopped");
    
// },10000)
