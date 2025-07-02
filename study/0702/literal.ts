let literalObj : "tom" | "Linda" | "jeff" | "sue" | 50 | {name : string};
literalObj = "tom"; // tom을 넣으면 에러가 사라짐
literalObj = {name:"tom"};
// literalObj = "jill"; // 없는 이름이기에 오류가 뜸