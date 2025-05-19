const input = document.querySelector("input");
const button = document.querySelector(".add");
const para = document.querySelector(".text");
const alert = document.querySelector(".alert");
const todo = document.querySelector(".todo");
para.innerHTML = "there is no todo yet !";
function addtodo() {
    const value = input.value;
    if (value.length === 0) {
        alert.style.color = "red";
        alert.innerHTML = "please insert at least 1 letter !!!";
    }
    else {
        alert.innerHTML = "";
        para.innerHTML = "";
        input.value = null;

        const div = document.createElement("div");

        const p = document.createElement("p");
        const update = document.createElement("button");
        const dlt = document.createElement("button");

        p.classList.add("txt");
        update.classList.add("update");
        dlt.classList.add("delete");
        div.classList.add("new");

        p.innerHTML = value;
        update.innerHTML = "update";
        dlt.innerHTML = "delete";

        div.appendChild(p);
        div.appendChild(update);
        div.appendChild(dlt);

        todo.appendChild(div);
    }
}
input.onkeydown = function (e) {
    if (e.key === "Enter") {
        console.log("enter pressed");
        addtodo();
    }
};
button.onclick = addtodo;

function update() {
    
    console.log("hekllo");
}
update.onclick = update;

function deletee(){
    console.log("hello");
    todo.remove();
}
// const dlt1=document.querySelector("dlt");
dlt.onclick=deletee;