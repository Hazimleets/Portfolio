// Typed.js Initialization
var typed = new Typed('.typing', {
    strings: ["AI Engineer"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});

// Navigation Highlight
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                    if (navItem.getAttribute('href').substring(1) === entry.target.id) {
                        navItem.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});


// 🔵 Chatbot Toggle Logic
document.getElementById('chat-icon').addEventListener('click', function () {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('close-chat').addEventListener('click', function () {
    document.getElementById('chat-window').style.display = 'none';
});

// 💬 Chat Logic
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;

    appendMessage('You', message);
    input.value = '';

    setTimeout(() => {
        const response = getBotResponse(message);
        appendMessage('Bot', response);
    }, 500);
}

function appendMessage(sender, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

 //function getBotResponse(msg) {
    // Simple logic – replace with your backend / AI model later
    //const lower = msg.toLowerCase();
    //if (lower.includes("hello") || lower.includes("hi")) return "Hello! How can I assist you today?";
    //if (lower.includes("portfolio") || lower.includes("projects")) return "You can check out my projects on the portfolio section above.";
    //if (lower.includes("skills")) return "I specialize in AI, machine learning, deep learning, and web development.";
    //if (lower.includes("contact")) return "You can use the contact form or email me directly!";
    //return "I'm just a demo bot! You can upgrade me with real AI or API integration.";
//}



// (function() {
//     emailjs.init('GWbNmnXzdkXtyMcIM'); // Replace 'YOUR_USER_ID' with your EmailJS user ID
// })();

// // Function to send email
// function sendEmail(event) {
//     event.preventDefault();
    
//     var templateParams = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     };
    
//     emailjs.send('service_m7y71lj', 'YOUR_TEMPLATE_ID', templateParams)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Email sent successfully!');
//         }, function(error) {
//             console.log('FAILED...', error);
//             alert('Failed to send email.');
//         });
// }
