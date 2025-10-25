//"statics"

// let v = "litu";
// console.log(v)


//Write a Program to reverse a string in JavaScript.


// function revString(str){
//    return str.split("").reverse().join("")
// }
// console.log(revString("i dont know"))

//  let samplearr = "123456789"
// function revString(str){
//     let myarr = str.split("").reverse().join("")
//     return myarr
// }
// console.log(revString(samplearr))

// function exam(){
//     let text = "String  By Function"
//     return text  
// }

// let arr = ["string By Array"]
// function revnewString(str){
// return  str.split("").reverse().join(" ")
                  
// }
// console.log(revnewString(exam()))
// console.log(revnewString(...arr))


// 15. Write a Program to find a sum of an array?

// let samplearr = [5,3,9,1,8,2]
// function sumArray (arr){
//     let sum = 0 ;
//     for(let i = 0 ; i < arr.length ; i++){
        
//         console.log(arr[i])
//         sum += arr[i] ;
//     }
//     return sum ;
// }

// console.log(sumArray(samplearr))



// 21. Write a Program to count the occurrences of a character in a string in JavaScript?
// using split() method 

// function countChr ( str , chr) {
//     return str.split(chr).length - 1 ;
// }
// console.log(countChr('Hi this is good', 'i'));

// // using loop 

// function countChr02(str, chr) {
//     let count = 0 ;
//     for ( let i = 0; i < str.length ; i++) {
//         if ( str[i] === chr) {
//             // console.log(str[i])
//             count++
//         }
//     }
//     return count
// }

// console.log(countChr02('hi this is good day' , 'o'))


// write a program to find factorial nuber by using iteration --------------------------

// function factorialNumber (n) {
//     let num = 1 ;
//     for (let i = 2 ; i <= n ; i++) {
//         num *= i ;
        
//     }
//     return num;

// }
// console.log(factorialNumber(5))

// write a program to find factorial nuber by using recursion --------------------------


// function factRecursion(n){
//     if ( n === 0 || n === 1 ) {
//         return 1 
//     }

//     return n *= factRecursion( n - 1)
// }


// console.log(factRecursion(5))

// write a program to find factorial nuber by using while loop --------------------------

// function factWhile (n) {
//     let res = 1 ;
//     while(n > 1) {
//         res *= n; 
//         n--
//     }
//     return res ;
// }

// console.log(factWhile(5))


// function factWhile (n) {
//     let res = 1 ;
//     while(n > 1) {
//         res = res * n ;
//                 // console.log(n)
//         n--

//     }
//     return res ;
// }
// console.log(factWhile(5))



// Hero ---background-- chang task-------------------------------

var images = [ "url(assete/img/01.jpg)", "url(assete/img/02.jpg)", "url(assete/img/03.png)"]
var herobg = document.getElementById("hero")
var i = 0 ;
function changebg( ){
    herobg.style.backgroundImage = images[i];
    i++ 
    if ( i > images.length) {
        i = 0 ;
    }
    setTimeout("changebg()",2000)
}
changebg()

 

window.addEventListener('scroll',function(){
    let menu = document.getElementById('menu_bar');
    if ( this.window.pageYOffset >= 850){
        menu.classList.add('sticky')
    }else{
        menu.classList.remove('sticky')
    }
})



// let expertItem = document.getElementsByClassName('expert_item');
// console.log(expertItem)
exitem()
function exitem(){
    let i ;
    let colors = ['red', "green", "blue", "yellow", 'pink'];
    let expertItem = document.getElementsByClassName('expert_item');

    for( i = 0; i < expertItem.length ; i++ ){
        expertItem[i].style.backgroundColor = colors[i]
    }

}


