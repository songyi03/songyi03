const set = new Set([1,2,2,2,3,4]); // set의 ()의 의미: 생성자 호출, 데이터를 미리 세팅할 수 있다. 데이터 세팅은 []배열로
set.add(5);
set.add(5);
set.delete(2);
console.log(set);

const map = new Map();//실무에서 set보다 map이 훨씬 많이 쓰임
map.set("name","Lee");
map.get("name"); // get으로 키 입력값 찾음음
map.set("age", 20);
map.delete("age");
console.log(map);
console.log(map.get("name"));
console.log(map.get("age"));
console.log(map.size);

for (const val of set) { // 디버깅 잡을떄 사용용
    console.log(val);
}

for (const [key, val] of map) { // 디버깅 잡을떄 사용용
    console.log(key, val);
}