document.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    var fullname = document.getElementById('name').value;
    localStorage.setItem('name', fullname);

    var email = document.getElementById('email').value;
    localStorage.setItem('email', email);
}  document.addEventListener('submit', addItem);

function addItem(event){
    event.preventDefault();
    const name = event.target.name.value;
    
    const email = event.target.email.value;
    const obj={
        name,
        email
    }
    var key = new Date().getTime()
    localStorage.setItem(key+'user', JSON.stringify(obj));

    showUseronScreen(obj)
}
function showUseronScreen(obj){
    

    const parentElem =document.getElementById('users');
   // const childElem =document.createElement('li');
   // childElem.textContent = 'Name -'+ obj.name+ ' and '+ 'Email -' + obj.email
   // parentElem.appendChild(childElem);
   parentElem.innerHTML = parentElem.innerHTML + `<li> ${obj.name} - ${obj.email} </li>`
let deleteBtn = document.createElement('button');
deleteBtn.className = 'btn';
deleteBtn.appendChild(document.createTextNode('Delete'));
parentElem.appendChild(deleteBtn);
   
}