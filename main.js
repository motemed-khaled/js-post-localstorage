// show all data in storage first if found
if (window.localStorage.getItem("tasks")) {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"));
    for (let i = 0; i< tasks.length; i++) {
    let myDiv = document.createElement("div");
    myDiv.className = "box";
    myDiv.innerHTML = `<h4>${tasks[i]}</h4> <button class = "delete">Delete</button>`;
    document.querySelector(".content").prepend(myDiv);
    }
    } 

// add new task in local storage and dispaly it in page

document.querySelector(".submit").onclick = function () {
    let myText = document.querySelector(".text").value;
    document.querySelector(".text").value = "";
    if (myText === "") {
        document.querySelector(".text").focus();
        return;
    }
    if (window.localStorage.getItem("tasks") === null) {
        window.localStorage.setItem("tasks", "[]");
    }
    let oldValues = JSON.parse(window.localStorage.getItem("tasks"));
    console.log(typeof oldValues)
    oldValues.push(myText);
    window.localStorage.setItem("tasks", JSON.stringify(oldValues));
    if (window.localStorage.getItem("tasks")) {
        let tasks = JSON.parse(window.localStorage.getItem("tasks"));
        let myDiv = document.createElement("div");
        myDiv.className = "box";
        myDiv.innerHTML = `<h4>${tasks[tasks.length - 1]}</h4> <button class = "delete">Delete</button>`;
        document.querySelector(".content").prepend(myDiv);
        document.querySelector(".text").focus();
    }
}

// delete button

document.addEventListener("click", function (e) {
    if (e.target.className === "delete") {
        let newTasks = [];
        e.target.parentElement.remove();
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        for (let j = 0; j < tasks.length; j++) {
            if (tasks[j] === e.target.parentElement.firstChild.innerHTML) {
                continue;
            }
            newTasks.push(tasks[j]);
        }
        window.localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
})
    





