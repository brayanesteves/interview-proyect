var name;
var tasks = [];
var tasks2;
var tasksList = document.getElementById("todo-item");
var count;

// Get the input field
var input = document.getElementById("task");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13 || event.key === 'Enter') {
        Create();
        Read();
        // Cancel the default action, if needed
        event.preventDefault();

    }
});
function Create() {
    let storage = JSON.parse(localStorage.getItem("tasks"));
    name = document.getElementById("task").value;
    if (name == '') {
        alert("Write the name");
    } else {
        if (storage == null) {
            tasks.push(name+" "+new Date());
            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else {
            tasks = JSON.parse(localStorage.getItem("tasks"));
            tasks.push(name+" "+new Date());
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

    }
}

function Read() {
    Count();
    tasksList.innerHTML = '';
    tasks2 = JSON.parse(localStorage.getItem("tasks"));
    if (tasks2 != null) {
        for (var i = 0; i < tasks2.length; i++) {
            tasksList.innerHTML += `
            <div class="todo-item">
                <div class="todo-item-left">
                        <input type="checkbox">
                        <div class="todo-item-label">${tasks2[i]}</div>
                </div>
                <div>
                    <button onclick="Update(${i});">Edit</button>
                    <button onclick="Delete(${i});">x</button>
                </div>
            </div>           
            `;

        }
    }
}
function Count() {
    
    tasks2 = JSON.parse(localStorage.getItem("tasks"));
    if (tasks2 != null) {
        for (var i = 0; i < tasks2.length; i++) {
            document.getElementById("count").value = i+1;

        }
        console.log(i);
    }
}

function Update(i3) {
    let tasks4 = JSON.parse(localStorage.getItem("tasks"));
    tasksList.innerHTML = '';
    for (var i = 0; i < tasks4.length; i++) {
        if (i == i3) {
            tasksList.innerHTML += `
            <div class="todo-item">
                <div class="todo-item-left">
                        <input type="checkbox">
                        <input id="newName" class="mb-2 form-control" name="newName" placeholder="${tasks4[i]}">
                </div>
                <div>
                    <button onclick="Update(${i});">Edit</button>
                    <button onclick="Read();">Cancel</button>
                </div>
            </div>      
                     
            `;
        }else{
            tasksList.innerHTML += `
            <div class="todo-item">
                <div class="todo-item-left">
                        <input type="checkbox">
                        <div class="todo-item-label">${tasks2[i]}</div>
                </div>
                <div>
                    <button onclick="Update(${i});">Edit</button>
                    <button onclick="Delete(${i});">x</button>
                </div>
            </div>             
            `;
        }
    }
}
function Update2(i){
    let tasks5 = JSON.parse(localStorage.getItem("tasks"));
    tasks5[i] = document.getElementById("newName").value;
    if(tasks5[i] == ''){
        alert('WHITE THE tasks');
    }else{
        localStorage.setItem("tasks", JSON.stringify(tasks5));
        Read();
    }
}
function Delete(i2) {
    let tasks3 = JSON.parse(localStorage.getItem("tasks"));
    tasks3.splice(i2, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks3));
    Read();

}