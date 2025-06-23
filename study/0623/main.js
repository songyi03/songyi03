// alert("Hello World");
// console.log("Hello Wolrd");

// document.write("<h1>Document Write</h1>");

// let currentYear = 2025;
// let birthYear = prompt ("당신의 태어난 해를 입력하세요");
// let age = currentYear - birthYear + 1;
// alert("당신의 나이는 " + age + "살 입니다.");

// let name = "철수";
// let age = 20;
// let isStudent = true;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// let price = 10000;
// let rate = 0.2;
// let discount = price * rate;
// let finalPrice = price - discount;

// console.log("할인된 가격은 " + finalPrice + "원 입니다.");

// let name = "영희";
// console.log(`안녕하세요, ${name}님!`); // 최근에 더 많이는 추세이다. 
// console.log("안녕하세요, " + name + "님!");

// let a = 10; 
// console.log(a);
// a += 5;
// console.log(a);
// a -=3;
// console.log(a)
// a *= 2;
// console.log(a)
// a /= 4;
// console.log(a);
// console.log(`최종 값은 ${a} 입니다.`);

// //1. 이름과 나이를 입력받아 인사말 출력하기 
// let name = prompt ("이름을 입력하세요.");
// let age = prompt ("나이를 입력하세요.");
// alert(`안녕하세요! ${name}님, ${age}살 이시군요. 반갑습니다~`); 


// //2. 두 수를 입력받아 사칙연산 결과를 각각 출력하기 
// let number = Number(prompt("숫자를 입력해주세요."));
// let number1 = Number(prompt("두번쨰 숫자를 입력해주세요"))
// alert(number+number1);

// //3. == vs === 비교 실험하기기
// console.log(1=="1")
// console.log(1==="1")

//실습: 3의 배수 검사기
// let num = prompt("숫자를 입력하세요.");
// if (num % 3 === 0){
//     alert("3의 배수입니다.");
// } else {
//     alert("3의 배수가 아닙니다.");
// }
//프로그래밍에서는 + - * / %(모듈러연산)까지 많이 쓴다.
// %는 나누고 몫이 아닌, 나머지를 연산하는 것이다. 나머지가 0이면 배수이다!
// /는 나누고 나서 몫을 나타내는 것이다. 



// let day = prompt("요일을 입력하세요.");
// switch (day) {
//     case "월요일":
//         alert("한 주의 시작!");
//         break;
//     case "금요일":
//         alert("불타는 금요일!");    
//         break;
//     default:
//         alert("평범한 하루네요.");    
// }

//변수 연습문제 (1~3문제)
//1 
// let a = 5; 
// let b = 3;
// console. log (a+b);

// let name = "홍길동";
// let age = 20;
// console.log(`${name}님은 ${age}살 입니다.`)

// let side =4;
// console.log(side*side);

///조건문 연습문제 (4~6문제)
//4
// let number = 7;
// if (number % 2 === 0) {
//      console.log("짝수입니다.");
// } else {
//     console.log("홀수입니다.");
// }

// let age = 16;
// if (age <19) {
//     console.log("미성년자입니다");
// } else {
//     console.log("성인입니다.");
// }

// let password = "1234"
// let input = "1234"
// if(password === input) {
//     console.log("로그인 성공")
// } else {
//     console.log("로그인 실패")
// }

//팀장님 답
// let a = 5;
// let b = 3;
// alert (a+b);

// let name = "홍길동";
// let age = 20;
// alert (`${name}님은 ${age}살 입니다.`)

// let side = 4;
// alert (side*side);

let number = 7;
if (number % 2 === 0) {
    alert("짝수입니다.");
} else {
    alert("홀수입니다.");
}

let age = 16;
if (age <19) {
    alert("미성년자입니다.");}
    else { alert("성인입니다");}

let password = "1234";
let input = "1234";
if (password === input) {
    alert ("로그인 성공");
} else {alert("로그인 실패");}


