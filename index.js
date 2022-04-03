// Write your code here!
/*const element = document.createElement('div')
document.body.appendChild(element);

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}

element.appendChild(ul);

element.style.background = '#27647B';
element.style.fontSize = '24px';
element.style.marginLeft = '30px';
element.style.lineHeight = 3;

element.className = "dog";

element.classList.add("pet-Listing", "dog");

document.getElementsByTagName('ul')[0];
ul.removeChild(ul.querySelector('li:nth-child(2)'));
ul.remove();*/
document.querySelector("main#main").remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Andrew is the champion!";


