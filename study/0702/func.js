function add(a, b) {
    return a + b;
}
// a: number, b: number → 매개변수 타입
// : number → 반환값 타입
// 변수와 리턴의 타입이 정의 되었다!
function runMore(distance) {
    return distance + 10;
}
console.log(runMore(10));
function eat(calories) {
    console.log("i ate " + calories + "calories");
}
function sleepIn(hours) {
    console.log("I slept " + hours + "hours");
    ;
}
var ate = eat(100);
console.log(ate);
var slept = sleepIn(10);
console.log(slept);
