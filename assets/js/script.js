// Global Hoist Variables
var userInput1 = document.querySelector("#user-input-1");
var userInput2 = document.querySelector("#user-input-2");
var userInput3 = document.querySelector("#user-input-3");
var userInput4 = document.querySelector("#user-input-4");
var userInput5 = document.querySelector("#user-input-5");
var userInput6 = document.querySelector("#user-input-6");
var userInput7 = document.querySelector("#user-input-7");
var userInput8 = document.querySelector("#user-input-8");
var userInput9 = document.querySelector("#user-input-9");


// Present time & date
$("#presentDay").text(moment().format("h:mm A on dddd, MMMM D" + "."))


// Saves local data on save button event
var userData1 = localStorage.getItem("userInput1");
userInput1.textContent = userData1;

$('#save-btn-1').on("click", function() {
    var userInput1 = document.querySelector("#user-input-1").value;
    localStorage.setItem("userInput1", userInput1);
});



var userData2 = localStorage.getItem("userInput2");
userInput2.textContent = userData2;

$('#save-btn-2').on("click", function() {
    var userInput2 = document.querySelector("#user-input-2").value;
    localStorage.setItem("userInput2", userInput2);
});



var userData3 = localStorage.getItem("userInput3");
userInput3.textContent = userData3;

$('#save-btn-3').on("click", function() {
    var userInput3 = document.querySelector("#user-input-3").value;
    localStorage.setItem("userInput3", userInput3);
});



var userData4 = localStorage.getItem("userInput4");
userInput4.textContent = userData4;

$('#save-btn-4').on("click", function() {
    var userInput4 = document.querySelector("#user-input-4").value;
    localStorage.setItem("userInput4", userInput4);
});



var userData5 = localStorage.getItem("userInput5");
userInput5.textContent = userData5;

$('#save-btn-5').on("click", function() {
    var userInput5 = document.querySelector("#user-input-5").value;
    localStorage.setItem("userInput5", userInput5);
});



var userData6 = localStorage.getItem("userInput6");
userInput6.textContent = userData6;

$('#save-btn-6').on("click", function() {
    var userInput6= document.querySelector("#user-input-6").value;
    localStorage.setItem("userInput6", userInput6);
});



var userData7 = localStorage.getItem("userInput7");
userInput7.textContent = userData7;

$('#save-btn-7').on("click", function() {
    var userInput7 = document.querySelector("#user-input-7").value;
    localStorage.setItem("userInput7", userInput7);
});



var userData8 = localStorage.getItem("userInput8");
userInput8.textContent = userData8;

$('#save-btn-8').on("click", function() {
    var userInput8 = document.querySelector("#user-input-8").value;
    localStorage.setItem("userInput8", userInput8);
});



var userData9 = localStorage.getItem("userInput9");
userInput9.textContent = userData9;

$('#save-btn-9').on("click", function() {
    var userInput9 = document.querySelector("#user-input-9").value;
    localStorage.setItem("userInput9", userInput9);
});


// changes colors dynamically depending on the time of day
var addColors = function() {
    var presentHour = moment().hour();
    
    for (i = 9; i < 18; i++) {
        var colorChanges = $("#time-" + i).find(".time-block");
        // reset classes after reload
        colorChanges.removeClass("past present future");
    
        if (presentHour < i) {
            colorChanges.addClass("future");
        } else if (presentHour > i) {
            colorChanges.addClass("past");
        } else {
            colorChanges.addClass("present");
        }
    }

    
};



addColors();






