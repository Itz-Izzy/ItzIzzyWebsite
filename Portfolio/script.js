const startButton = document.querySelector(".start-button");
const startMenu = document.querySelector(".start-menu");


startButton.addEventListener("click", () => {

    startMenu.classList.toggle("open");

});



function openWindow(id) {

    const win = document.getElementById(id);

    win.classList.add("open");


    // Reset position to center
    win.style.left = "50%";
    win.style.top = "50%";
    win.style.transform = "translate(-50%, -50%)";


    // Reset z-index
    win.style.zIndex = 1000;

}



function closeWindow(id) {

    const win = document.getElementById(id);

    win.classList.remove("open");

}



/* ===============================
   WINDOW DRAGGING
   =============================== */


let activeWindow = null;

let offsetX = 0;
let offsetY = 0;



document.querySelectorAll(".window").forEach(win => {


    const bar = win.querySelector(".drag-bar");


    bar.addEventListener("mousedown", (e) => {


        activeWindow = win;


        const rect = win.getBoundingClientRect();


        offsetX = e.clientX - rect.left;

        offsetY = e.clientY - rect.top;


        win.style.zIndex = 1000;


    });


});



document.addEventListener("mousemove", (e) => {


    if(activeWindow){


        activeWindow.style.left =
            e.clientX - offsetX + "px";


        activeWindow.style.top =
            e.clientY - offsetY + "px";


        activeWindow.style.transform =
            "none";


    }


});



document.addEventListener("mouseup", () => {


    activeWindow = null;


});

// ===============================
// WINDOWS STYLE CLOCK
// ===============================

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();


    let hours = now.getHours();

    let minutes = now.getMinutes();


    let ampm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12;

    hours = hours ? hours : 12;


    minutes = minutes < 10
        ? "0" + minutes
        : minutes;


    clock.textContent =
        `${hours}:${minutes} ${ampm}`;

}


updateClock();

setInterval(updateClock, 1000);

function updateClock() {

    const now = new Date();


    let hours = now.getHours();

    let minutes = now.getMinutes();


    let ampm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12;

    hours = hours ? hours : 12;


    minutes = minutes < 10
        ? "0" + minutes
        : minutes;


    document.getElementById("clock-time").textContent =
        `${hours}:${minutes} ${ampm}`;



    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];


    document.getElementById("clock-date").textContent =
        `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;

}


updateClock();

setInterval(updateClock, 1000);

function openWindow(id) {

    const win = document.getElementById(id);

    win.classList.add("open");


    win.style.left = "50%";
    win.style.top = "50%";
    win.style.transform = "translate(-50%, -50%)";


    win.style.zIndex = 1000;


    createTaskButton(id);

}



function closeWindow(id) {

    const win = document.getElementById(id);

    win.classList.remove("open");


    const button =
        document.getElementById(
            id + "-button"
        );


    if(button){

        button.remove();

    }

}



function createTaskButton(id){

    if(document.getElementById(id + "-button"))
        return;


    const win =
        document.getElementById(id);


    const title =
        win.querySelector(".window-title span").textContent;



    const button =
        document.createElement("button");


    button.className =
        "task-button";


    button.id =
        id + "-button";


    button.textContent =
        title;



    button.onclick = () => {

        win.style.zIndex = 1000;

        win.classList.add("open");

    };


    document
    .getElementById("task-buttons")
    .appendChild(button);

}