let obj: {name:string}&{age:number}={
    name: "Tom",
    age: 25, // 인터섹션이 값이 하나라도 없으면 오류가 남남
};
console.log(obj);