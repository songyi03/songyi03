
# 📘 타입스크립트 기초 총정리 for 공쥬님 👑

---

## 📌 0. 타입스크립트란?

타입스크립트(TypeScript)는 **자바스크립트에 "타입"을 추가한 언어**예요.

**왜 씀?**

- 실행 전에 오류를 잡기 위해!
- 코드 자동완성 / 협업 편함 / 유지보수 좋음!

```ts
let name: string = "공주님";
name = 123; // ❌ 타입 오류!
```

---

## 🧱 1. 기본 타입들

| 타입 | 설명 | 예시 |
|------|------|------|
| string | 문자열 | "hello" |
| number | 숫자 | 123, 3.14 |
| boolean | 참/거짓 | true, false |
| object | 객체 | { name: "공주", age: 28 } |
| any | 아무거나 됨 (지양) | let x: any = "hello" |
| unknown | 어떤 타입일지 모를 때 | let x: unknown = ... |
| null / undefined | 값 없음 | null, undefined |

---

## 🧩 2. 배열과 튜플

```ts
let fruits: string[] = ["사과", "바나나"];
let info: [string, number] = ["공주", 28];
```

---

## 📦 3. 객체 타입

```ts
let user: { name: string; age: number } = {
  name: "공주",
  age: 28
};
```

---

## 🧮 4. 함수 타입

```ts
function greet(name: string): string {
  return `안녕~ ${name}`;
}
```

---

## 🧱 5. type & interface

### type
```ts
type User = { name: string; age: number };
```

### interface
```ts
interface User {
  name: string;
  age: number;
}
```

---

## 🏗️ 6. 클래스 & this

```ts
class Person {
  constructor(public name: string) {}

  sayHi() {
    console.log(`안녕, 나는 ${this.name}`);
  }
}
```

---

## 🧬 7. 객체지향 4대 특성

- 캡슐화 (private)
- 상속 (extends)
- 추상화 (abstract)
- 다형성 (오버라이딩)

---

## 🔧 8. 유니언 & 리터럴 타입

```ts
let value: string | number = "hi";
type Theme = "light" | "dark";
```

---

## 🧨 9. 타입 좁히기 & 단언

```ts
if (typeof value === "string") { ... }
let el = document.querySelector("#btn") as HTMLButtonElement;
```

---

## ⚙️ 10. TS → JS 컴파일 흐름

1. .ts 파일 작성
2. tsc로 컴파일
3. .js로 실행

---

## 📁 11. tsconfig.json 예시

```json
{
  "compilerOptions": {
    "target": "ES6",
    "strict": true,
    "outDir": "./dist"
  }
}
```

---

## 📚 12. 초보자용 추천 학습 순서

1. 기본 타입
2. 배열/튜플
3. 함수
4. 객체
5. interface/type
6. 클래스/this
7. 상속/추상화
8. 유니언/리터럴
9. unknown/any
10. 제네릭/모듈화 (심화)

---

> 공쥬님을 위한 정리 끝!  
> 이제 타입스크립트 마스터는 시간 문제예요 😎
