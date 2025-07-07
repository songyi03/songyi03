// 구조분해, 스프레드 연산자
//react 할때 많이 쓰는 연산자라 꼭 알고 가야함!

//스프레드 연산자
const user={id:1, name:"kim", age:20, address:"seoul"};
const updated={id:2, ...user, name:"lee", age:21}; //...user뒤쪽에 오는 것만 덮어쓰여진다.

console.log(updated);

//스프레드 배열열
const userArr = [1,2,3,4,5];
const updateArr=[1,2,...userArr,6,7];
console.log(updateArr);

//구조분해
const userSplit ={id: 1, name:"kim", age:20, address:"seoul"};
// const {id,name,age,address}=userSplit;
// console.log(id, name, age, address);

const {id, name, ...rest}=userSplit;
console.log(id, name, rest);

//1. 구조 분해 할당을 이용해 다음 객체에서 'title'과 'author'를 추출해보세요. 
const Book = {title:"java", author:"kim"};
const {title, author}=Book;
// const {title: title2, author}=Book; 이렇게 되면, title이 title2로 변경된 것이다!
console.log(title);
console.log(author);

