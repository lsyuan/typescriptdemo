class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    var counter: number = 0;
    var list: number[] = [12, 2, 3]
    enum Color { Red, Blue };
    var color: Color = Color.Blue

    var node: any = 4;
    node = '1'
    console.log(node);

    var list1: any[] = [1, 's']
    for (let i in list1) {
        console.log(list1[i])
    }
    console.log(list1)

    console.log(color.toString())
    return "Hello12, " + person.firstName + " " + person.lastName;
}

function getUser(): Person {
    var person: Person = new Student("Shiyuan", "Li", "");
    return person;
}

let counter = function (i: number): number {
    i++;
    console.log(i)
    i++;
    return i;
}
  
let user = getUser(); 

namespace Geometry {
    export interface Vector2dInterface {
        toArray(callback: (x: number[]) => void): void;
        toArrary(num: number, callback: (x: number) => number): number;
    }
    export class MyGeometry implements Vector2dInterface {
        toArray(callback: (x: number[]) => void): void {
            throw new Error("Method not implemented.");
        }
        toArrary(num: number, callback: (x: number) => number): number {
            callback(num);
            return num;
        }
    }
}

var fun = function (x: number) {
    return x;
}

var fun2 = (x: number) => {
    console.log(`this is callback return value ${x}`)
    return x;
}

var geo: Geometry.MyGeometry = new Geometry.MyGeometry();
geo.toArrary(1, fun2);

document.body.innerHTML = greeter(user);