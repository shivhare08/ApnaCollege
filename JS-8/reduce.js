const arr = [2,3,4]

//starting me one wale parameter me null hoga
//and two wale me ek ek krke arr ki value aayegi
const result = arr.reduce((random,element)=> random+element )
const result1 = arr.reduce((r,e)=>{
    console.log(r);
    console.log(e);
})
console.log(result);

//find maximum
const arr1 = [33,43,2,45,6,27,39]

const maximum_value = arr1.reduce((max,ele)=>{
    if(max < ele){
        return ele;
    }
    else{
        return max;
    }
}) 

console.log(maximum_value);
