class Calculator {
    add(a: number, b: number): void {
        console.log(a+b);

    }

    add(a: string, b: string): void {
        console.log(a+b);

    }
}

let Calculator = new Calculator();
Calculator.add(1,2);
Calculator.add("1","2");

//GPT 답
// class Calculator {
//     // 👇 1. 오버로드 시그니처만 선언 (여기선 구현 ❌)
//     add(a: number, b: number): void;
//     add(a: string, b: string): void;
  
//     // 👇 2. 실제 구현은 한 번만 (조건문으로 타입 구분)
//     add(a: any, b: any): void {
//       console.log(a + b);
//     }
//   }
  
//   const calculator = new Calculator();
//   calculator.add(1, 2);       // 3
//   calculator.add("1", "2");   // "12"