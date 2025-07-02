class Person2 {
    // name: string;
    // age: number;

    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }
    constructor(public name: string, private age: number) {} // 위에 주석처리 된 것과 같은 내용을 한줄로 축약한것이다.
    introduce(): string {
        return `Hi, I'm ${this.name}`;
    }
}

class Car implements Vehicle { carModel:string;
    owner: string;
    carWeight: number;
    buyYear: number;
    isSunk: boolean;
    distance: number;

      drive() {
        console.log("GO");
      }

        alarm() {
            console.log ("Beep Beep");

        }

        back() {
            console.log ("Back");
        }

        wipe () {
            console.log ("wipe");
        }
        
        break() {
            console.log ("Break");
        }

        accelerate() {
            console.log("Accelerate");

        }

        trunk() {
            console.log("Trunk");
            
        }

        
    }
    // 인터페이스는 하위에 들어오는게 하나라도 없으면 오류가 난다!

// class Car {
//     carModel:string;
//     owner: string;
//     carWeight: number;
//     buyYear: number;
//     isSunk: boolean;
//     distance: number;

//       drive() {
//         console.log("GO");
//       }

//         alarm() {
//             console.log ("Beep Beep");

//         }

//         back() {
//             console.log ("Back");
//         }

//         wipe () {
//             console.log ("wipe");
//         }
//     }

    class DumpTruck extends Car {
        stroage: number; 
        operate () {
            console.log("Operate");
        }

        spread () {
            console.log("Spread");
        }

    }

    class Bus extends Car {
        passenger: number;
        busNumber: number;

        constructor(passenger: number, busNumber: number) {
            super();
            console.log("Bus constructor");
        } // 부모꺼 쓰려면 constructor, 내꺼 쓰려면 this

        openDoor () {
            console.log("Open Door");
        }
    }

    interface Vehicle {
        break(): void;
        accelerate(): void;
        trunk(): void;
    }
