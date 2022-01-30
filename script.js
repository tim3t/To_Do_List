const form = document.querySelector("#makeToDoList");
const toDoInput = document.querySelector("#input");
const toDoList = document.querySelector("#toDoList");


const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i=0; i <savedTodos.length; i++) {
    let newTodo = document.createElement("li");
    newTodo.innerText = savedTodos[i].task;
    toDoList.appendChild(newTodo);
}


// Add items
form.addEventListener('submit',function(e){
    e.preventDefault();
    const addedItem = document.createElement('li');
    const removeItem = document.createElement('button');
        removeItem.innerText = 'X';
    const doneItem = document.createElement('input');        
    
    addedItem.appendChild(doneItem);    
    addedItem.innerText = input.value;
    addedItem.appendChild(removeItem);
    input.value="";
    toDoList.appendChild(addedItem);

    savedTodos.push({ task: addedItem.innerText});
    localStorage.setItem("todos", JSON.stringify(savedTodos));
})



// Remove and Done
toDoList.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        localStorage.remove("todos", e.target.parentElement);
    }
    else if 
      (e.target.tagName === 'LI'){
        e.target.classList.toggle('done');
      }
    
})
