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
// class 예제
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name; //내가 만든 인스턴스 그 자신
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("\uC548\uB155! \uB098\uB294 ".concat(this.name, ", ").concat(this.age, "\uC0B4 \uC774\uC57C!"));
    };
    return Person;
}());
var person = new Person("송이", 30); // 클래스 기반으로 실제 객체 생성
person.sayHello();
// 상속 예제
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " \uC774\uB3D9 \uC911"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("멍멍!");
    };
    return Dog;
}(Animal));
var myDog = new Dog("초코");
myDog.move();
myDog.bark();
//공통기능은 부모 클래스에, 개별 기능은 자식 클래스에 
//추상 클래스 예제
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(w, h) {
        var _this = _super.call(this) || this;
        _this.width = w;
        _this.height = h;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
// abstract: 직접 객체 못 만들고 상속받아서만 사용 가능
// 반드시 구현해줘야 하는 메서드만 선언할 수 있음
var rect = new Rectangle(10, 5);
var area = rect.getArea();
console.log(area);
