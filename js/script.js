document.addEventListener("DOMContentLoaded", function () {
    const name = prompt("Silakan masukkan nama Anda:");
    document.getElementById("welcome-message").innerText = `Hi ${name}! Selamat datang di Sekolah Kreatif.`;

    const messageForm = document.getElementById("message-form");

    messageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const messageInput = document.getElementById("message-input");
        const submittedMessage = messageInput.value;

        alert(`Anda mengirim pesan: ${submittedMessage}`);
    });
});
