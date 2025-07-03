var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//문제 5. 배열과 객체
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var book = new Book();
book.title = "책1";
book.author = "저자1";
var book2 = new Book();
book2.title = "책2";
book2.author = "저자2";
var book3 = new Book();
book3.title = "책3";
book3.author = "저자3";
var books = [book, book2, book3];
// let books2 = Array<Book>();
// books2.push(book);
// books2.push(book2);
// books2.push(book3);
for (var i = 0; i < books.length; i++) {
    console.log("책이름 : " + books[i].title + ", 저자 : " + books[i].author);
}
//books[i].title -> 배열자리에 i가 들어가있다.  출력을 하려고 하면 for문을 쓰면 된다. 
var Person4 = /** @class */ (function () {
    // ✅ 생성자: 객체 만들 때 name과 age를 받아서 저장
    function Person4(name, age) {
        this.name = name;
        this.age = age;
    }
    // ✅ 메서드: 객체가 자기 소개할 때 실행할 기능
    Person4.prototype.introduce = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694, \uC800\uB294 ".concat(this.age, "\uC0B4\uC758 ").concat(this.name, "\uC785\uB2C8\uB2E4."));
    };
    return Person4;
}());
var person4 = new Person4("Alice", 20); // ← name과 age 두 개 다 줘야 해!
person4.introduce(); // 👉 콘솔에 인사 출력!
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    // ✅ 이 메서드는 반드시 클래스 안쪽에 있어야 함!
    Product.prototype.display = function () {
        console.log("\uC81C\uD488: ".concat(this.name, ", \uAC00\uACA9: ").concat(this.price, "\uB9CC\uC6D0"));
    };
    return Product;
}());
// ✅ 객체 생성 + 메서드 호출
var product = new Product("Macbook", 150);
product.display(); // 👉 콘솔에 "제품: Macbook, 가격: 150만원" 출력
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sound = function () {
        console.log("동물이 소리를 냅니다");
    };
    return Animal;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog2.prototype.sound = function () {
        console.log("멍멍!");
    };
    return Dog2;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sound = function () {
        console.log("야옹!");
    };
    return Cat;
}(Animal));
var dog2 = new Dog2();
var cat = new Cat();
dog2.sound();
cat.sound();
