let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/top.png') {
        myImage.setAttribute('src', 'images/top2.jpg');
    } else {
        myImage.setAttribute('src', 'images/top.png');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function () {
    // setUserName();
}
function setUserName() {
    let myName = prompt('pleas input your name:');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello ，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello ，' + storedName;
}