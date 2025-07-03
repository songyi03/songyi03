//문제 5. 배열과 객체
class Book {
    title: string;
    author: string;
}

let book = new Book();
book.title = "책1";
book.author ="저자1";
let book2 = new Book();
book2.title ="책2";
book2.author = "저자2";
let book3 = new Book();
book3.title = "책3";
book3.author="저자3";

let books = [book, book2, book3];
// let books2 = Array<Book>();
// books2.push(book);
// books2.push(book2);
// books2.push(book3);

for (let i=0; i<books.length; i++) {
    console.log("책이름 : " + books[i].title + ", 저자 : " + books[i].author);
}
//books[i].title -> 배열자리에 i가 들어가있다.  출력을 하려고 하면 for문을 쓰면 된다. 

class Person4 {
    name: string;
    age: number;
  
    // ✅ 생성자: 객체 만들 때 name과 age를 받아서 저장
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // ✅ 메서드: 객체가 자기 소개할 때 실행할 기능
    introduce() {
      console.log(`안녕하세요, 저는 ${this.age}살의 ${this.name}입니다.`);
    }
  }
  
  let person4 = new Person4("Alice", 20);  // ← name과 age 두 개 다 줘야 해!
  person4.introduce();  // 👉 콘솔에 인사 출력!



  class Product {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  
    // ✅ 이 메서드는 반드시 클래스 안쪽에 있어야 함!
    display() {
      console.log(`제품: ${this.name}, 가격: ${this.price}만원`);
    }
  }
  
  // ✅ 객체 생성 + 메서드 호출
  let product = new Product("Macbook", 150);
  product.display(); // 👉 콘솔에 "제품: Macbook, 가격: 150만원" 출력

  

  class Animal {
    sound() {
        console.log("동물이 소리를 냅니다");
    }
  }

  class Dog2 extends Animal {
    sound() {
        console.log("멍멍!");
    }
  }

  class Cat extends Animal {
    sound() {
        console.log("야옹!");
    }
  }

  let dog2= new Dog2();
  let cat = new Cat();

  dog2.sound();
  cat.sound();
