// class 예제
class Person { // 설계도 (청사진)
    name: string;
    age: number;

    constructor(name: string, age: number) {//객체를 만들때 호출되는 함수
        this.name= name; //내가 만든 인스턴스 그 자신
        this.age= age;
    }
    
    sayHello() {
        console.log (`안녕! 나는 ${this.name}, ${this.age}살 이야!`);
    }
}

let person = new Person("송이", 30); // 클래스 기반으로 실제 객체 생성
person.sayHello();

// 상속 예제
class Animal {
    name: string;
    constructor (name: string) {
        this.name= name;
    }

    move() { 
        console.log(`${this.name} 이동 중`)
    }
}

class Dog extends Animal { // 부모 클래스를 상속, 부모의 속성/메서드 재사용 가능능
    bark() {
        console.log("멍멍!");
    }
}

let myDog = new Dog("초코");
myDog.move();
myDog.bark();
//공통기능은 부모 클래스에, 개별 기능은 자식 클래스에 


//추상 클래스 예제
//추상 클래스 -> 도형 설계도 (넓이 구하는 규칙만 있음)
abstract class Shape {
    abstract getArea(): number; // 넓이를 꼭 구현해~
}

//사각형 클래스 -> 설계도를 물려받아서
class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(w: number, h:number) {
        super(); // 부모 먼저 호출  
        this.width=w; // 가로 저장
        this.height=h; // 세로 저장
    }

    getArea(): number {
        return this.width*this.height; // 넓이 계산
    }
}
// abstract: 직접 객체 못 만들고 상속받아서만 사용 가능

// 반드시 구현해줘야 하는 메서드만 선언할 수 있음
let rect = new Rectangle(10, 5);// 사각형 객체 만들기
let area = rect.getArea();// 넓이 구하기
console.log(area);//50 출력

//OOP 연습문제
// 문제 1. 간단한 클래스 만들기
// 설명: Dog라는 클래스를 만들어서 "멍멍!"이라고 출력하는 bark() 메서드를 만들어보세요.
class Dog2 { 
    bark(): void {
        console.log("멍멍!")
    }
}
let dog2 = new Dog2();
dog2.bark();

//문제 2. 생성자 연습
// 설명: user 클래스를 만들어 생성자에서 name을 받고, greet() 메서드에서 "안녕하세요, 제 이름은 홍길동입니다."와 같이 출력되도록 하세요. 
class User {
    name: string;

    constructor (name: string) {
        this.name=name;
    }

    greet() {
        console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
    }
}

let user = new User("홍길동");
user.greet();

//문제 3. 속성 변경하기
//Counter 클래스를 만들고 count라는 숫자 속성을 가지며, increase() 메서드를 호출 할 때 마다 1씩 증가하게 만드세요. 
//show() 메서드로 현재 숫자를 출력합니다. 


