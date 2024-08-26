// Funcionalidad de Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verificación simple (deberías usar un backend real en producción)
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos.';
    }
});

// Funcionalidad del Panel de Control
let patients = JSON.parse(localStorage.getItem('patients')) || [];

document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const info = document.getElementById('patientInfo').value;

    const patient = {
        name: name,
        info: info
    };

    patients.push(patient);
    localStorage.setItem('patients', JSON.stringify(patients));
    displayPatients();
});

function displayPatients() {
    const patientList = document.getElementById('patientList');
    patientList.innerHTML = '';
    patients.forEach(patient => {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${patient.name}, Información: ${patient.info}`;
        patientList.appendChild(li);
    });
}

// Mostrar pacientes al cargar
document.addEventListener('DOMContentLoaded', displayPatients);

