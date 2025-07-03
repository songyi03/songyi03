//문제 4. 클래스 간 관계 만들기
class Car2 {
    drive(driver: Driver) {
        console.log(`${driver.name}님, 운전을 시작합니다.`);
    }
}

class Driver {
    name: string;
}

let car = new Car2();
let driver = new Driver();
driver.name ="홍길동";
car.drive(driver);
//car.drive(new Driver()); 