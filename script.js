const inputBox = document.getElementById("input-box");
const noteContianer = document.getElementById("taskListContainer");

function addButton() {
    if (inputBox.value === "") {
        alert("You must write something");
    }
    else {
        //create a list
        let note = document.createElement("li");
        note.innerHTML = inputBox.value;
        

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        note.appendChild(span);

        //Append the list to the container
        noteContianer.appendChild(note);

        //Empty the inputBox 
        inputBox.value = "";
        saveData();   //updates the storage

    }


}

noteContianer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        //Add a line-through to the list
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        //delete the list
        e.target.parentElement.remove();
        saveData(); //updates the storage
    }
})

function saveData() {
    localStorage.setItem("dataList", noteContianer.innerHTML);
}

function getData() {
    noteContianer.innerHTML = localStorage.getItem("dataList");
}

getData();

