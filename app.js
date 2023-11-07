const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');

const todos = [];

function renderTodos() {
    // Clear the existing todo list
    todoList.innerHTML = '';
    // Loop through the todos array and create list items with delete and edit buttons
    for (let i = 0; i < todos.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = todos[i];

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            deleteTodo(i);
        };

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            editTodo(i);
        };

        // Add delete and edit buttons to the list item
        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);

        // Add the list item to the todo list container
        todoList.appendChild(listItem);
    }
}

function addTodo() {
    const todoText = todoInput.value;
    if (todoText === '') {
        alert('Please enter a task.');
    }
    else {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}
function deleteTodo(i) {
    todos.splice(i, 1);
    renderTodos();
}

function editTodo(i) {
    const updatedTodo = prompt('Edit your todo:', todos[i]);
    if (updatedTodo !== null) {
        todos[i] = updatedTodo;
        renderTodos();
    }
}

// Initial rendering of todos
renderTodos();




// function deleteFunc(){
//     console.log('todo deleted', arr[i]);
//     arr.splice(i , 1);
//     for (let i = 0; i < arr.length; i++) {
//         let liId = `li_id${i}`;
//         document.getElementById(`${liId}`).remove();
//         }
// }

// function editTodo(i){
//     console.log('todo edited', arr[i]);
// }