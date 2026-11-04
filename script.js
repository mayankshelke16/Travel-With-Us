function sendEmail() {

    // Get destination entered by visitor
    const destination = document
        .getElementById("destination")
        .value.trim();

    // Get optional message
    const message = document
        .getElementById("message")
        .value.trim();

    // Check destination
    if (destination === "") {
        alert("Please enter where you want to travel!");
        return;
    }

    // Email recipient
    const recipient = "shital.shelke2026@gmail.com";

    // Email subject
    const subject = "Travel Enquiry - Travel With Us";

    // Email body
    const body =
        "Hello Travel With Us,\n\n" +
        "I would like to plan a trip.\n\n" +
        "My preferred destination: " + destination + "\n\n" +
        "My message: " + (message || "No additional message") +
        "\n\nPlease share more details.\n\nThank you.";

    // Gmail compose URL
    const gmailURL =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=" + encodeURIComponent(recipient) +
        "&su=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    // Open Gmail in new tab
    window.open(gmailURL, "_blank");

}
