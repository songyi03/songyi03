type Points = 20 | 30 | 40 | 50; //별칭 alis 라고 함 
let score: Points = 40;
// let score2: 20 | 30 | 40 | 50 = 40; // 이렇게 쓰면 유지보수에 어렵다 alis 가 늘어날 경우에에
let score2: Points = 40;
let score3: Points = 40;
let score4: Points = 40; 

console.log(score);

// @ts-ignore
// @ts-nocheck
// prettier=ignore
type ComplexPerson = {
    name: string,
    age: number,
    birthday: Date,
    married: boolean,
    address: string,
};

type Type1 = number; 
type Type2 = string; 
type Type3 = boolean;
type Type4 = {};
type Type5 = { name: string } & {age: number};
type Type6 = {name: string} |{age: number};
type Type7 = Type5 & Type6; 

