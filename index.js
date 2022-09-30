const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const firstPassword = document.getElementById('pw-1')
const secondPassword = document.getElementById('pw-2')

function generatePasswords(){
  let firstPass = [];
  for(let i=0; i<10;i++){
   firstPass
   .push(characters[Math.floor(Math.random() * (characters.length + 1))]);
 }
  firstPassword.textContent = firstPass.join('');

  let secondPass = [];
  for(let i=0; i<10;i++){
   secondPass
   .push(characters[Math.floor(Math.random() * (characters.length + 1))]);
 }
  secondPassword.textContent = secondPass.join('');

  firstPassword.addEventListener('click',copy1);
  firstPassword.setAttribute("title", "Click to copy");
  secondPassword.addEventListener('click',copy2);
  secondPassword.setAttribute("title", "Click to copy");

}

function copy1(){
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(firstPassword.textContent);
  return Promise.reject('The Clipboard API is not available.');
}
function copy2(){
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(secondPassword.textContent);
  return Promise.reject('The Clipboard API is not available.');
}
