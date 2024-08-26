// Función para manejar el inicio de sesión
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

// Arreglo para almacenar pacientes
const patients = [];

// Función para manejar el formulario de pacientes
document.getElementById('patientForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('patientName').value;
    const details = document.getElementById('patientDetails').value;

    // Verificar si el paciente ya existe
    const existingPatientIndex = patients.findIndex(patient => patient.name === name);
    if (existingPatientIndex >= 0) {
        // Actualizar información si el paciente ya existe
        patients[existingPatientIndex].details = details;
    } else {
        // Agregar nuevo paciente
        patients.push({ name, details });
    }

    updatePatientList();
    
    document.getElementById('patientName').value = '';
    document.getElementById('patientDetails').value = '';
});

// Función para actualizar la lista de pacientes
function updatePatientList() {
    const list = document.getElementById('patientList');
    list.innerHTML = '';
    patients.forEach(patient => {
        const li = document.createElement('li');
        li.textContent = `${patient.name}: ${patient.details}`;
        list.appendChild(li);
    });
}

// Llamada a la función de actualización al cargar la página de administración
if (document.getElementById('patientList')) {
    updatePatientList();
}

        li.textContent = `${patient.name}: ${patient.details}`;
        list.appendChild(li);
    });
}

