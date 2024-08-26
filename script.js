document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if ((username === 'ADMIN' && password === '1234') || (username === 'MICHELL' && password === '221099')) {
        window.location.href = 'admin.html';
    } else {
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});

const patients = [];

document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const details = document.getElementById('patientDetails').value;
    
    patients.push({ name, details });
    updatePatientList();
    
    document.getElementById('patientName').value = '';
    document.getElementById('patientDetails').value = '';
});

function updatePatientList() {
    const list = document.getElementById('patientList');
    list.innerHTML = '';
    patients.forEach(patient => {
        const li = document.createElement('li');
        li.textContent = `${patient.name}: ${patient.details}`;
        list.appendChild(li);
    });
}

