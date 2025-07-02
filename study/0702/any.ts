let value: any = 10; 
value ="hello"; //ok

// 위에 any에 숫자를 줬는데 "hello"를 써도 오류가 나지 않음 - 동적 타입

console.log(value);

value = new Array(); // Array를 표현하는 4가지 방법: [], Array(), new Array(). new Array(10)
value.push(33);

console.log(value);