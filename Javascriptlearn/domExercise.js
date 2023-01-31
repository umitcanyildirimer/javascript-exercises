// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = "Hey I'm red!";
content.appendChild(para);

const hthree = document.createElement('h3');
hthree.style.color = 'blue';
hthree.textContent = "I'm a blue h3!";
content.appendChild(hthree);

const newdiv = document.createElement('div');
newdiv.style.cssText = 'border-style: solid';
newdiv.style.backgroundColor= 'pink';
container.appendChild(newdiv);

const hone = document.createElement('h1');
hone.textContent = "I'm in a div";
newdiv.appendChild(hone);

const pnew = document.createElement('p');
pnew.textContent = "ME TOO!";
newdiv.appendChild(pnew);

const btn = document.createElement('button');

btn.addEventListener('click', function (e) {
  console.log(e.target);
});
btn.textContent = "Butonum";
btn.id = "1";

newdiv.appendChild(btn);

const btn1 = document.createElement('button');

btn1.addEventListener('click', function (e) {
  console.log(e.target);
});
btn1.textContent = "Butonum";
btn1.id = "2";
newdiv.appendChild(btn1);
const btn2 = document.createElement('button');

btn2.addEventListener('click', function (e) {
  console.log(e.target);
});
btn2.textContent = "Butonum";
btn2.id = "3";
newdiv.appendChild(btn2);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {

  alert(button.id);

});

});