//selectors
const todoInput = document.querySelector('.todo-input');
const addBtn = document.querySelector('.addBtn');
const items = document.querySelector('.items');
const todoList = document.querySelector('.todo-list');
const newItem = document.querySelector('.new-item');





//events
addBtn.addEventListener('click',addItem);
todoList.addEventListener('click',checkedDeleted);


//functions
function addItem(event)
{
    event.preventDefault();
    //todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    //newItem
    const newItem = document.createElement('li');
    newItem.innerText = todoInput.value;
    newItem.classList.add('newItem');
    todoDiv.appendChild(newItem);
    //completed button
    const completed = document.createElement("button");
    completed.innerHTML = '<img src="./img/tick.png" height="15px">';
    completed.classList.add('complete-btn');
    todoDiv.appendChild(completed);
    //trash button
    const remove = document.createElement("button");
    remove.innerHTML = '<img src="./img/trash.png" height="15px">';
    remove.classList.add('trash-btn');
    todoDiv.appendChild(remove);
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}
 function checkedDeleted(event)
 {
    event.preventDefault();
    const item = event.target;
    if(item.classList[0] === "complete-btn"){
        item.parentElement.classList.toggle('complete');
    }
    if(item.classList[0] === "trash-btn"){

            item.parentElement.classList.add('delete');
            item.parentElement.addEventListener('transitionend',function(){
                item.parentElement.remove();
            });
    }
 }