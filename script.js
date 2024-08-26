// Datos simulados para autenticación
const validUsername = 'trabajador';
const validPassword = '1234';

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('loginSection');
    const workerSection = document.getElementById('workerSection');
    const loginError = document.getElementById('loginError');
    const logoutLink = document.getElementById('logoutLink');
    const loginLink = document.getElementById('loginLink');
    const showAddPatientForm = document.getElementById('showAddPatientForm');
    const showPatientList = document.getElementById('showPatientList');
    const addPatientForm = document.getElementById('addPatientForm');
    const addPatientFormContent = document.getElementById('addPatientFormContent');
    const addPatientError = document.getElementById('addPatientError');
    const addPatientSuccess = document.getElementById('addPatientSuccess');
    const patientList = document.getElementById('patientList');
    const patientListContent = document.getElementById('patientListContent');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validUsername && password === validPassword) {
            loginSection.style.display = 'none';
            workerSection.style.display = 'block';
            loginError.style.display = 'none';
            loginLink.style.display = 'none';
            logoutLink.style.display = 'inline';
        } else {
            loginError.style.display = 'block';
        }
    });

    logoutLink.addEventListener('click', function () {
        loginSection.style.display = 'block';
        workerSection.style.display = 'none';
        loginLink.style.display = 'inline';
        logoutLink.style.display = 'none';
    });

    showAddPatientForm.addEventListener('click', function () {
        addPatientForm.style.display = 'block';
        patientList.style.display = 'none';
    });

    showPatientList.addEventListener('click', function () {
        addPatientForm.style.display = 'none';
        patientList.style.display = 'block';
        displayPatientList();
    });

    addPatientFormContent.addEventListener('submit', function (e) {
        e.preventDefault();

        const patientName = document.getElementById('patientName').value;
        const patientDetails = document.getElementById('patientDetails').value;

        if (patientName && patientDetails) {
            // Aquí normalmente se enviaría la información al servidor
            const listItem = document.createElement('li');
            listItem.textContent = `${patientName}: ${patientDetails}`;
            patientListContent.appendChild(listItem);

            addPatientFormContent.reset();
            addPatientError.style.display = 'none';
            addPatientSuccess.style.display = 'block';
        } else {
            addPatientError.style.display = 'block';
        }
    });

    function displayPatientList() {
        // Aquí podrías obtener la lista de pacientes desde una base de datos
        // Por simplicidad, solo se muestra un mensaje
        patientListContent.innerHTML = '<li>Paciente 1: Detalles del paciente</li><li>Paciente 2: Detalles del paciente</li>';
    }
});
