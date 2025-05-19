const input = document.querySelector("input");
const btn = document.querySelector("button");
const empty = document.querySelector(".empty");
const alert = document.querySelector(".alert");
const todo = document.querySelector(".todo");
const root = document.querySelector("root");
empty.innerHTML = "there is no todo to show !"

function addtodo() {
    const value = input.value;
    if (value.length === 0) {
        alert.style.color = "red";
        alert.innerHTML = "please insert at least 1 letter";
    }
    else {
        empty.innerHTML = "";
        alert.innerHTML = "";
        const p = document.createElement("p");
        const dltbtn = document.createElement("button");

        p.innerHTML = value;
        dltbtn.innerHTML = "delete";

        todo.appendChild(p);
        todo.appendChild(dltbtn);


    }
};
input.onkeydown = function (e) {
    if (e.key === "Enter") {
        console.log("enter pressed");
        addtodo();
    }
};
btn.onclick = addtodo;