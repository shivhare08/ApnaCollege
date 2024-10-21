//map = array ke element ko 1 1 krke uthata h 
// function parametr me n then operation


const arr = [1,2,3,4,5,6];

const double = arr.map(function(el){
    return 2*el;
})

const square = arr.map((value)=>{
    return value*value;
})

const minus = arr.map(digit =>{
    return 2-digit;
})

console.log(minus);

console.log(double);

console.log(square);


//que
const student = [{
    name:"shahsank",
    marks:95
},
{
    name:"kunal",
    marks:98
},
{
    name:"dhruv",
    marks:97
}]

const cgpa = student.map(m=>{
    console.log(m);
    
})

//console.log(cgpa);


