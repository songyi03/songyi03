//고차 배열 메서드
const nums = [1,2,3,4,5];

//map
const squares=nums.map(n=>n**2);
for (const val of squares) {
    console.log(`val======>${val}`);
}
for (let i=0; i<nums.length; i++) {
    console.log(`nums[${i}]=>${nums[i]}, squares[${i}] => ${squares}`)
}

//filter
const evens = nums.filter(n=>n%2===0);
for (const val of evens) {
    console.log(`val => ${val}`);
}

//reduce
// const sum = nums.reduce((acc, cur)=>acc+cur,0);
// console.log(`sum=>${sum}`);

const sum = nums. reduce((acc,cur)=>{
    acc+=cur;
    console.log(`acc=>${acc}, cur => ${cur}`);
    return acc;
},0);
console.log(`sum =>${sum}`);

//find
const found=nums.find(n=>n>2);
console.log(`found=${found}`);

//some
// const hasNegative = nums.some(n=>n<0); //음수 판별법 //flase
const hasNegative = nums.some(n=>n<2); //true
console.log(hasNegative);

//every
const allPositive = nums.every(n=>n>0);//true
console.log(allPositive);

//flat
const nested = [1,2,3];
const duplicated = nested.flatMap(n=>[n,n]);
//[[1,2,3]],[1,2.3]]
//[1,1,2,2,3,3]
for (let nest of duplicated) {
    console.log(`nest =>${nest}`);
}

console.log(duplicated);