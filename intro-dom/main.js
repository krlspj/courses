'use strict';
console.log('start');
const todos = JSON.parse(localStorage.getItem('todos')) || [];
//const todos = [];

console.log('todos');
console.log(todos);

const render = () => {
    const todoList = document.getElementById("todo-list");
    const todosTemplate = todos.map((t) => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elem, i) => {
        elem.addEventListener('click', () => {
            elem.parentNode.removeChild(elem);
            todos.splice(i, 1);
            actTodos(todos);
            render();
            console.log(elem, i);
        });
    });
}

const actTodos = (todos) => {
    const todoStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todoStrings);
}

window.onload = () => {
    render();
    const form = document.getElementById("todo-form");
    //console.log(form);
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = "";
        todos.push(todoText);
        actTodos(todos);
        render();
    }
}
