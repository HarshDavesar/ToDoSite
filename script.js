const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
    let task = inputBox.value.trim(); // Trim spaces

    if (task === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = task;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = " \u00d7 ";
        li.appendChild(span);

        saveData();
    }

    inputBox.value = ""; // Properly clear input field
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "li") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName.toLowerCase() === "span") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();
