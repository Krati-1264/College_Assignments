document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById("formMessage").innerText = "Invalid email format.";
        return;
    }
    if (!passwordRegex.test(password)) {
        document.getElementById("formMessage").innerText = "Weak password. Include uppercase, lowercase, number, and special character.";
        return;
    }
    alert("Form Submitted Successfully!");
    document.getElementById("formMessage").innerText = "";
});

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    if (taskInput.value === "") return;
    let li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML = `${taskInput.value}<button onclick=this.parentElement.remove()>Remove</button>;`
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

// Simple Chatbot
function chatResponse() {
    let input = document.getElementById("chatInput").value.toLowerCase();
    let response = "I don't understand.";
    if (input.includes("hello")) response = "Hello there!";
    else if (input.includes("how are you")) response = "I'm a bot, but I'm good!";
    document.getElementById("chatOutput").innerText = response;
}

// Fetch Weather Data (Example API)
function fetchWeather() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true')
        .then(response => response.json())
        .then(data => document.getElementById("weatherData").innerText = `Temperature: ${data.current_weather.temperature}°C`)
        .catch(error => document.getElementById("weatherData").innerText = "Error fetching data")
}