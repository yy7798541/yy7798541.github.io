/*let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/

let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName () {
    let myName = prompt("enter your name :");
    if (!myName) {
        alert("输入名字格式有误，请再次输入名字。")
        setUserName();
    } else {
        localStorage.setItem("name",myName);
        myHeading.textContext = "Welcome predator : "+myName;
        }
}

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pro.png"){
        myImage.setAttribute("src","images/predator.png");
    } else {
        myImage.setAttribute("src","images/pro.png");
        }
    };

if (!localStorage.getItem("name")) {
    setUserName();
    } else {
        let storedName = localStorage.getItem("name");
        myHeading.textContent = "Welcome predator : " + storedName;
}

myButton.onclick = function () {
    setUserName();
};