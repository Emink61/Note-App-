let message = document.getElementById("noteInput");
const button = document.getElementById("addNoteBtn");
let list = document.getElementById("noteList");

function appendmessage() {
    if (message.value.trim() === "") return;
    let listElement = document.createElement("li");
    listElement.textContent = message.value;

    const delbutton = document.createElement("button");
    delbutton.textContent = "X";
    delbutton.classList.add("delete-btn");
    listElement.addEventListener("click",function() {
        listElement.classList.add("checked");
    });
    delbutton.addEventListener("click", function(){
        listElement.classList.add("smoke-animation")
        setTimeout(() => {
            listElement.remove();
        }, 700);


        delbutton.remove();
    });

    listElement.appendChild(delbutton);
    list.appendChild(listElement);
};

function deletemessage() {
    list.removeChild(listElement);
};

button.addEventListener("click", function(){
    appendmessage();
    message.value = "";
}); 
