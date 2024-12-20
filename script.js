// "variaveis"
const todoInput = document.querySelector("#td-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

//funçoes






//eventos

todoForm.addEventListener("submit" , (e) =>{
    e.preventDefault();

    const inputValue = todoInput.value;

    if( inputValue){
        console.log(inputValue);
    }
})
