console.log("DSA Website Loaded");
const greeting = document.createElement("p");
const hour = new Date().getHours();
if (hour < 12) {
    greeting.textContent = "Good Morning! Start learning DSA now!";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon! Take your DSA journey forward!";
} else {
    greeting.textContent = "Good Evening! It's a great time to study!";
}
document.body.prepend(greeting);
