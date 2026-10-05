/* ==========================================
   TRAVEL WITH US
   TRIP DATA
========================================== */


/*
================================================
CHANGE YOUR TRIP INFORMATION HERE
================================================

You only need to change the values below.

Do NOT change the variable names.
Only change the information inside the quotes.
*/


/* ==========================================
   DISPLAY TRIP DATA
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // Location in hero
        document.getElementById(
            "heroLocation"
        ).textContent =
            "Explore " +
            tripData.location +
            " 🌸";


        // Location name
        document.getElementById(
            "locationName"
        ).textContent =
            tripData.location;


        // Location description
        document.getElementById(
            "locationDescription"
        ).textContent =
            tripData.description;


        // City
        document.getElementById(
            "location"
        ).textContent =
            tripData.city;


        // Departure date
        document.getElementById(
            "departureDate"
        ).textContent =
            tripData.departureDate;


        // Return date
        document.getElementById(
            "returnDate"
        ).textContent =
            tripData.returnDate;


        // Phone number 1
        document.getElementById(
            "phone1"
        ).textContent =
            tripData.phone1;


        // Phone number 2
        document.getElementById(
            "phone2"
        ).textContent =
            tripData.phone2;


        // Contact phone 1
        document.getElementById(
            "contactPhone1"
        ).textContent =
            tripData.phone1;


        // Contact phone 2
        document.getElementById(
            "contactPhone2"
        ).textContent =
            tripData.phone2;


        // Footer
        document.getElementById(
            "footerTrip"
        ).textContent =
            "🌸 " +
            tripData.location +
            " | " +
            tripData.city;


    }
);


/* ==========================================
   SEND ENQUIRY
========================================== */

function sendEnquiry() {


    /*
    ============================================
    MESSAGE
    ============================================
    */


    const message =

        "Hello Travel With Us!\n\n" +

        "I am interested in the following trip:\n\n" +

        "Location: " +
        tripData.location +
        "\n" +

        "Departure Date: " +
        tripData.departureDate +
        "\n" +

        "Return Date: " +
        tripData.returnDate +
        "\n\n" +

        "Please provide more information.";


    /*
    ============================================
    SMS NUMBER
    ============================================
    
    SMS will be opened for the first number.
    */


    const smsNumber =
        tripData.phone1;


    /*
    ============================================
    CREATE SMS LINK
    ============================================
    */


    const smsURL =

        "sms:" +
        smsNumber +
        "?body=" +
        encodeURIComponent(message);


    /*
    ============================================
    OPEN SMS
    ============================================
    */


    window.location.href =
        smsURL;

}
