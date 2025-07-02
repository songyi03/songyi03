let unionObj: { name:string} | {age:number} ={
    // age: 25 // 이름이 없어도 age가 있어서 오류가 안남.
    name: "Sue" // 이름과 나이 중에 하나만 있어도 오류가 안남.
}

//유니온은 둘 중 하나만 만족해도 되기 때문에 

console.log(unionObj);