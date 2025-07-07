// ✅ 연습문제 1: Map과 Set 활용하기
// 문제: 1~5 숫자가 포함된 배열 [1, 2, 2, 3, 4, 5, 5]에서 중복을 제거한 후, 모든 숫자에 5를 더한 값을 순서대로 출력하세요. 그리고 "total"이라는 키에 중복을 제거한 숫자들의 합을 저장한 Map을 만들어 출력하세요.

// 1~5 숫자가 포함된 배열 [1,2,2,3,4,5,5,]
const arr = [1,2,2,3,4,5,5];

//중복을 제거
const ser = new Set(arr);

// 모든 숫자에 5를 더한 값 //순서대로 출력력
for (let num of set) {
    console.log(Number(num)+5);
}

//total 이라는 키에 중복을 제거한 숫자들의 합  // Map을 만듬
const map=new Map();
map.set("total", set.reduce((acc, cur)=>acc+cur,0));

//출력
console.log(map.get("total"));