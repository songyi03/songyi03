function add (a: number, b: number): number {
    return a + b; 
}

// a: number, b: number → 매개변수 타입
// : number → 반환값 타입
// 변수와 리턴의 타입이 정의 되었다!

function runMore(distance: number): number {
    return distance + 10;
}

console.log(runMore(10));

function eat(calories: number){
    console.log("i ate " + calories+ " calories");
    
}
function sleepIn(hours: number):void{
    console.log("I slept "+hours+" hours");;
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);