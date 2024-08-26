document.addEventListener('DOMContentLoaded', () => {
    const users = {
        'ADMIN': 'wiljaja22',
        'MICHELL': '221099'
    };

    const loginForm = document.getElementById('login-form');
    const dashboard = document.querySelector('.dashboard-container');
    const logoutButton = document.getElementById('logout');
    const addPatientForm = document.getElementById('add-patient-form');
    const patientsList = document.getElementById('patients');
    const userNameSpan = document.getElementById('user-name');

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (users[username] === password) {
            localStorage.setItem('user', username);
            window.location.href = 'dashboard.html';
        } else {
            alert('Credenciales incorrectas');
        }
    });

    if (dashboard) {
        const loggedUser = localStorage.getItem('user');
        if (loggedUser) {
            userNameSpan.textContent = loggedUser.charAt(0).toUpperCase() + loggedUser.slice(1);
        } else {
            window.location.href = 'index.html';
        }

        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });

        addPatientForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const patientName = document.getElementById('patient-name').value;
            const patientInfo = document.getElementById('patient-info').value;

            let patients = JSON.parse(localStorage.getItem('patients')) || [];
            const existingPatientIndex = patients.findIndex(patient => patient.name === patientName);

            if (existingPatientIndex >= 0) {
                patients[existingPatientIndex].info = patientInfo;
            } else {
                patients.push({ name: patientName, info: patientInfo });
            }

            localStorage.setItem('patients', JSON.stringify(patients));
            displayPatients();
            addPatientForm.reset();
        });

        function displayPatients() {
            const patients = JSON.parse(localStorage.getItem('patients')) || [];
            patientsList.innerHTML = '';
            patients.forEach(patient => {
                const patientItem = document.createElement('li');
                patientItem.textContent = `${patient.name}: ${patient.info}`;
                patientsList.appendChild(patientItem);
            });
        }

        displayPatients();
    }
});
