(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
function sayHello(name) {
    return `hello from ${name}`;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
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
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9fYnJvd3Nlci1wYWNrQDYuMS4wQGJyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9ncmVldC50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQUEsU0FBZ0IsUUFBUSxDQUFDLElBQVc7SUFFaEMsT0FBTyxjQUFjLElBQUksRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFIRCw0QkFHQzs7OztBQ0hELG1DQUFrQztBQUVsQyxTQUFTLFFBQVEsQ0FBQyxPQUFlLEVBQUUsT0FBZTtJQUM5QyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtRQUNiLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNyQztBQUNMLENBQUM7QUFFRCxRQUFRLENBQUMsVUFBVSxFQUFFLGlDQUFpQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZTpzdHJpbmcpXHJcbntcclxuICAgIHJldHVybiBgaGVsbG8gZnJvbSAke25hbWV9YDtcclxufSIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSAnLi9ncmVldCdcclxuIFxyXG5mdW5jdGlvbiBzaG93TmFtZShkaXZOYW1lOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XHJcbiAgICBpZiAoZWx0ICE9IG51bGwpIHtcclxuICAgICAgICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8oY29udGVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnNob3dOYW1lKFwiZ3JlZXRpbmdcIiwgXCJUeXBlU2NyaXB0IEZyb20gU2hpeXVhbjExMzMzMTIyXCIpO1xyXG4iXX0=
