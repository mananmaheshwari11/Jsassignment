//Name:Manan Maheshwari 
// Q.1 .Write a program to find max number among two numbers passed in to a function, use ternary operator to find max number.
function max(num1,num2) {
    return num1>num2?num1:num2;    
}

let num1=parseInt(prompt('Enter number 1'))
let num2=parseInt(prompt('Enter number 2'))
r=max(num1,b)
console.log(r)
// 2. Write a program to accept a number from user input and print whether the number is even or odd.
const x1=parseInt(prompt('Enter a number '))
if (x1%2==0){
    console.log('Even')
}
else{
    console.log('Odd')
}
// 3. Given a program statement console.log(2 ^ 4);, check the output and explain why it is that way.
console.log(2^4)
//Bitwise Operation 




// 5.. Write a program to print table of 3 like below.
// 3*1=3=3
// 3*2=3+3=6

const number = 3;

for (let i = 1; i <= 10; i++) {
    let answer = "";
    let sum = 0; 
    for (let j = 1; j <= i; j++) {
        sum += number; 
        if (j === 1) {
            answer += `${number}*${j}`;
        } else {
            answer += `+${number}`; 
        }
    }
    answer += `=${sum}`; 
    console.log(answer); 
}

// 46. Write a program to calculate sum of all even numbers from 1 to 100 using while loop.
console.log("Sum of even numbers")
sum=0 
for(let i=1;i<=100;i++){
    if(i%2==0){
        sum+=i 

    }
}
console.log(sum)
// 7.Write a program to print 8's table using ** operator.
console.log("8's table ")
n=8 
for(let i=1;i<=10;i++){
    let answer=`${NUMBER}**${i}=${n**i}`
    console.log(answer)
}


// 8. Write a program to create two arrays, concatenate them and print out the resulting array.
arr1=[0,2,4,6,8]
arr2=[1,3,5,7,9]
new_arr=arr1.concat(arr2)
console.log(new_arr)

// 9.Write a program to create an array of 5 cities e.g. "Nagpur","Bhopal","Delhi","Udaipur" and accept user input into a variable and print the array index if input value exists in array else print "Not Found".
function capitialise(s) {
    if (!s){
        return s;
    }
    else{
        return s.charAt(0).toUpperCase()+s.slice(1);
    }   
}
cities=["Nagpur","Bhopal","Delhi","Udaipur"]
city=prompt('Enter City')
new_str=capitialise(city)
if (new_str in cities){
    console.log("Found")
}
else{
    console.log("Not Found")
}
// 10.Write a program to create an array of 8 integers and use map function to square each element and print the results.
numbers=[2,3,4,5,6,7,8]
sqr_nos=numbers.map(num=>num**2)
console.log(sqr_nos)

// 11.Write a program to create an array of 10 string, create a function that returns longest string from the array.
function checkPallindrome(strings) {
    let max_len=0;
    let max_str="";
    for(let i=0;i<=9;i++) {
        x=strings[i].split('').reverse().join();
        if(x==strings[i] && x.length>max_len){
            max_len=x.length;
            max_str=x;
        }
    }
    return max_str;
}
strings=["Manan","Naman","aman","mananam ","abccba","adda","bec","defied","radar","level"]
let y=checkPallindrome(strings)
console.log("Longest Pallindromic")
console.log(x)


// 12.Write a program that creates two arrays of numbers and returns a new array that contains the intersection of the two arrays (i.e. only the numbers that appear in both arrays) and print the results to console.
function max_arr(arr1,arr2){
    let n1=arr1.length;
    let n2=arr2.length;
    let answer=[]
    x=max(n1,n2)
    if(x==n1){
        for(i=0;i<n2;i++){
            if(arr1[i].includes(arr2[i])){
                answer.push(arr1[i])
            }
        }
    }
    else{
        for(i=0;i<n1;i++){
            if(arr1[i].includes(arr2[2])){
                answer.push(arr1[i])
            }
        }
    }
    return answer;
   
}
arr1=[1,2,3,4,5]
arr2=[5,6,7,8,9]
let n=max_arr(arr1,arr2)
console.log(n)
// 13.Write a program that creates an array of numbers and returns a new array that contains only the unique numbers using reduce function.
function getUniqueNumbers(arr) {
    return arr.reduce((unique, num) => {
        if (!unique.includes(num)) {
            unique.push(num);
        }
        return unique;
    }, []);
}

const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);

//14.Using spread operator, write a program to create a new object that will look exactly like the one given in the output

const originalObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const newObject = { ...originalObject };
console.log(newObject);

// 15. Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

try {
    
    let undefinedObject = undefined;
    let value = undefinedObject.property;
    console.log("Value:", value); 
} catch (error) {

    console.log("Error caught:", error.message);
}
