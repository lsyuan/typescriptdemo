import { sayHello } from './greet'
 
function showName(divName: string, content: string) {
    const elt = document.getElementById(divName);
    if (elt != null) {
        elt.innerText = sayHello(content);
    }
}

showName("greeting", "TypeScript From Shiyuan11333122");
