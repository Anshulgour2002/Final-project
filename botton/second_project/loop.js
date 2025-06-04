/*/let a=[2,4,62,6,44,]
/*for (let index = 0; index < a.length; index++) {
    const element = a[index];
   console.log(element)
}
a.forEach((value,index,arr)=>{
    console.log(value,index,arr)
})
let obj ={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}
    

for (const element of a) {
    console.log(element)
    
}

let arr = [1,2,3,5,15];
let newarr=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2)
   
    
}
 console.log(newarr)


let arr = [1,2,3,5,15];
let new_arr= arr.map((e)=>{
    return e**2;
})
console.log(new_arr);

let greaterthenseven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}

console.log(arr.filter(greaterthenseven))



let arr =[2,4,6,8,99];
let red = (a,b)=>{
    return a+b
}
console.log(arr.reduce(red))
let arr=[2,3,4,];
let fact=(a,b)=>{
    return(a*b)
}
console.log(arr.reduce(fact));
 */

let n=5;
let arr=[];
for(let i=1;i<=5;i++){
    i=i*i
console.log(i)
}