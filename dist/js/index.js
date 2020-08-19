"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    var counter = 0;
    var list = [12, 2, 3];
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 1] = "Blue";
    })(Color || (Color = {}));
    ;
    var color = Color.Blue;
    var node = 4;
    node = '1';
    console.log(node);
    var list1 = [1, 's'];
    for (let i in list1) {
        console.log(list1[i]);
    }
    console.log(list1);
    console.log(color.toString());
    return "Hello12, " + person.firstName + " " + person.lastName;
}
function getUser() {
    var person = new Student("Shiyuan", "Li", "");
    return person;
}
let counter = function (i) {
    i++;
    console.log(i);
    i++;
    return i;
};
let user = getUser();
var Geometry;
(function (Geometry) {
    class MyGeometry {
        toArray(callback) {
            throw new Error("Method not implemented.");
        }
        toArrary(num, callback) {
            callback(num);
            return num;
        }
    }
    Geometry.MyGeometry = MyGeometry;
})(Geometry || (Geometry = {}));
var fun = function (x) {
    return x;
};
var fun2 = (x) => {
    console.log(`this is callback return value ${x}`);
    return x;
};
var geo = new Geometry.MyGeometry();
geo.toArrary(1, fun2);
document.body.innerHTML = greeter(user);
//# sourceMappingURL=index.js.map