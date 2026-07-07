// Make sure the wrapping function has the 'async' keyword!
async function submits() {
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let pNum = document.getElementById("pNumber").value;
    let contact = document.getElementById("contForm");

    if (email && name && pNum) {
        
        const BOT_TOKEN = '8940996620:AAEOl-EZlzNGakTx1335YzLBSmI1ProZj38'; 
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        const messageText = `New Form Submission:\nName: ${name}\nEmail: ${email}\nPhone: ${pNum}`;

        const data = {
            chat_id: 8516144324,
            text: messageText
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                contact.textContent = "You have successfully submitted your info. I will contact you soon.";
            } else {
                contact.textContent = "Something went wrong. Please try again.";
            }
        } catch (error) {
            console.error("Network error:", error);
            contact.textContent = "Connection error. Could not send message.";
        }
            
    } else {
        alert("Please fill out the form fully");
    }
}

function darkmod(){
     document.body.style.backgroundColor = "black";
     document.body.style.color = "white";
}
function lightmod(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}