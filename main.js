// Modal
document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

document.getElementById("closeModalFooterBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

const form = document.querySelector(".color");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const color = document.querySelector(".color input");
    const validColors = ["red", "blue", "green", "black", "white"];

    if(validColors.includes(color.value.toLowerCase())) {
        document.getElementById("color").style.backgroundColor = color.value.toLowerCase();
    } else {
        alert("The color value must be either red, blue, green, black, or white!");
    }
});

const form2 = document.querySelector(".average");
form2.addEventListener("submit", (e) => {
    e.preventDefault();

    document.getElementById("averageButton").addEventListener("click", function() {
        const inputString = document.getElementById("numInput").value;
        const numbers = inputString.split(":").map(Number);
        const sum = numbers.reduce((total, num) => total + num, 0);
        const average = sum / numbers.length;
        document.getElementById("averageResult").textContent = average;
    });
});