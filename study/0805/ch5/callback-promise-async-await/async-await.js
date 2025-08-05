// async 예제
async function myName() {
    return "Andy";
}

console.log(myName());



//async await 예제
async function  showName() { //이름을 출력하는 함수
    const name = await myName();
    console.log(name);
}

console.log(showName()); // 콘솔에 이름 출력



//async await, setTimeout()으로 1부터 10까지 세기
function waitOneSecond(msg) { // 1초 대기하고 메세지 출력
    return new Promise((resolve, _) => {
        setTimeout(()=>resolve(`${msg}`), 1000);
    });
}

async function countOneToTen() { //10초 동안 1초 마다 메세지 출력
    for (let x of [...Array(10).keys()]) { // 0부터 9까지 루프를 순회
        //1초 대기 후 result에 결과값 저장
        let result = await waitOneSecond(`${x + 1}초 대기 중...`);
        console.log(result);
    }
    console.log("완료");
}

countOneToTen();