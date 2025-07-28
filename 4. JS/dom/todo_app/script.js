const addBtn = document.getElementById('add-btn');
const clear = document.getElementById('clear-all');
const todoInput = document.getElementById('todo-input');
const todoItemsContainer = document.getElementById('todo-items-container');
addBtn.addEventListener('click', () => {

    const value = todoInput.value;

    console.log('user entered', value);

    const li = document.createElement('li');
    li.innerText = value;

    const delButton = document.createElement('button');

    delButton.innerText = 'X';

    li.append(delButton);

    delButton.addEventListener('click',() => {

        li.remove();

    })

    todoItemsContainer.append(li);
    todoInput.value = '';
})

clear.addEventListener('click',() => {
    todoItemsContainer.innerHTML = '';
})