document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const mainSection = document.getElementById('main-section');
    const loginSection = document.getElementById('login-section');
    const logoutButton = document.getElementById('logout-button');
    const patientForm = document.getElementById('patient-form');
    const patientList = document.getElementById('patient-list');
    const motivationalQuote = document.getElementById('motivational-quote');
    const quotes = [
        "La mente es todo. Lo que piensas, en eso te conviertes.",
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "La vida es 10% lo que me ocurre y 90% cómo reacciono a ello."
    ];

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function showSection(section) {
        loginSection.style.display = section === 'login' ? 'block' : 'none';
        mainSection.style.display = section === 'main' ? 'block' : 'none';
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if ((username === 'ADMIN' && password === '1234') || (username === 'MICHELL' && password === '221099')) {
            showSection('main');
            motivationalQuote.textContent = getRandomQuote();
        } else {
            loginMessage.textContent = 'Usuario o contraseña incorrectos.';
        }
    });

    logoutButton.addEventListener('click', () => {
        showSection('login');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        loginMessage.textContent = '';
    });

    patientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const patientName = document.getElementById('patient-name').value;
        const patientInfo = document.getElementById('patient-info').value;

        const listItem = document.createElement('li');
        listItem.textContent = `${patientName}: ${patientInfo}`;
        patientList.appendChild(listItem);

        patientForm.reset();
    });

    showSection('login');
});
