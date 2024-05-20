document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // You can add your booking logic here, for example, send data to a server or display a confirmation message.
    alert("Appointment booked successfully!");
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        bookAppointment();
    });

    function bookAppointment() {
        const clientName = document.getElementById('clientName').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const appointmentDate = document.getElementById('appointmentDate').value;
        const appointmentTime = document.getElementById('appointmentTime').value;

        // You can add further logic here, like sending data to a server or displaying a confirmation message.
        alert(`Appointment booked for ${clientName} on ${appointmentDate} at ${appointmentTime}. We will contact you at ${phoneNumber}.`);
        form.reset();
    }
});

function openWhatsApp() {
    // Replace '1234567890' with your actual WhatsApp number
    var phoneNumber = '1234567890';

    // Replace 'Book your appointment now!' with your desired message
    var message = 'Book your appointment now!';

    // Create the WhatsApp link
    var whatsappLink = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);

    // Open the link in a new tab
    window.open(whatsappLink, '_blank');
}
document.getElementById('appointmentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from the form
    var clientName = document.getElementById('clientName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var appointmentDate = document.getElementById('appointmentDate').value;
    var appointmentTime = document.getElementById('appointmentTime').value;
    var ampmValue = document.getElementById('ampmSelect').value;

    // Concatenate time with AM/PM
    var formattedTime = appointmentTime + ' ' + ampmValue;

    // You can now use formattedTime in your logic or send it to the server

    // Add your logic to handle the form data as needed
});
