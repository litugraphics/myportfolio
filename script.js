



// factorial number  01

function factIteration(n){
  let ans = 1;
    for (let i = 1; i <=n ; i++){
        console.log(i);
        ans *= i ;
    }
    return ans ;

}

console.log(factIteration([5]));

// factorial number  02

function factRecursion(n){
    if ( n === 0 || n ===1){
        return 1 ;
    }
    console.log(n) ;
    return n *= factRecursion(n-1) ;
}

console.log(factRecursion(5)) ;


// factorial number  03

function factwhile(n){
    let res =  1;
    while( n> 1){
        res *= n ;
        n-- ;
    }
    return res ;
}
console.log(factwhile(5)) ;
