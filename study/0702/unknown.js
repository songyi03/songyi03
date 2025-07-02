var value2 = 10;
value2 = "hello"; //ok
// 위에 any에 숫자를 줬는데 "hello"를 써도 오류가 나지 않음 - 동적 타입
// console.log(value);
value2 = new Array(); // Array를 표현하는 4가지 방법: [], Array(), new Array(). new Array(10)
if (value2 instanceof Array) {
    value2.push(33);
}
console.log(value2);
