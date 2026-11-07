
// Welcome message

window.addEventListener("load", function() {
    alert("Welcome to Anusha's Portfolio! 💜");
});

// Contact Form

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    document.getElementById("response").innerText =
        "Thank you, " + name +
        "! Your message has been entered successfully. 💜";

    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    document.getElementById("contactForm").reset();

});
