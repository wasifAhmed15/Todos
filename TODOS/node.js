
let i = document.getElementById("todosVal")
let todolist = document.getElementById("todolist")
function send() {
    todolist.innerHTML += `
    <li id ="li">${i.value}
    <button onclick="Del(this)" class="btn btn-outline-danger my-2">Delete</button>
       <button onclick="Edit(this)" class="btn btn-outline-danger my-2">Edit</button>
       </li>
    
    
    `;
    
    
i.value=""
   
}

function delall() {
    todolist.innerHTML=""
}
function Del(e){
   e.parentNode.remove()
}
function Edit(e) {
    var inp= prompt("enter Your value")
   console.log( e.parentNode.firstChild.nodeValue=inp)
}




// let i = document.getElementById("todosVal");
// let todolist = document.getElementById("todolist");

// function send() {
//     todolist.innerHTML += `
//     <li>${i.value}
//     <button onclick="Del()" class="btn btn-outline-danger my-2">Delete</button>
//        <button onclick="Edit()" class="btn btn-outline-danger my-2">Edit</button>
//        </li>
    
//     `;
// }

// function Del() {
//     let li = document.getElementById("todosVal");
//     li.remove();
// }

// function Edit() {
//     let li = document.getElementById("todosVal");
//     li.innerHTML = "New text";
// }