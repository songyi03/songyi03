abstract class Shape {
    size: number;
    calculateArea(): number {
        return 1;
    }
    abstract getAreaRectangle(width: number, height: number): number;
    abstract getAreaCircle(radius: number): number;
}

class Rectangle extends Shape {
    getAreaRectangle(width: number, height: number): number {
        return width*height;
    }
}
// 추상에서도 구현을 해줘야 에러가 안뜬다.

class Cricle extends Shape {
    getAreaCircle(radius: number): number {
        throw Error("Unimplemented method");

    }
}

// 깃허브 보고 다시 하기 !