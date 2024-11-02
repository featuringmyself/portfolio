function show_me() {
    let img = document.getElementById('facereveal');
    
    if (img.src.endsWith('rudra1.jpg')) {
        img.src = 'images/rudra3.jpg';
        document.getElementById('circular-text').style.display = 'none'; 
    } else {
        img.src = 'images/rudra1.jpg';
        console.log(img.src);
    }
    
}
function validatePhoneNumber() {
    const phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
    return true;
}
function sendToTelegram() {
    const botToken = '7825925336:AAE9mQP56isv46n3qAj8oAPemJ7dJrlgb_4';
    const chatId = '6010680123';
    const name = document.getElementById("name").value;
    const countryCode = document.getElementById("countryCode").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const telegramMessage = `New Consultation Request:\nName: ${name}\nCountry Code: ${countryCode}\nPhone: ${phone}\nMessage: ${message}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: telegramMessage })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Message sent to Telegram!");
        } else {
            alert("Failed to send message to Telegram.");
        }
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("consultationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    if (validatePhoneNumber()) {
        sendToTelegram();
    }
});
