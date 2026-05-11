// Example JS for future use

document.addEventListener("DOMContentLoaded", function() {
    console.log("QR Attendance System Loaded ✅");

    // Auto-hide messages after 5 sec
    let alerts = document.querySelectorAll(".alert");
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.display = "none";
        }, 5000);
    });
});
