"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
function showName(divName, content) {
    const elt = document.getElementById(divName);
    if (elt != null) {
        elt.innerText = greet_1.sayHello(content);
    }
}
showName("greeting", "TypeScript From Shiyuan11333122");
//# sourceMappingURL=main.js.map