// Función para manejar el login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if ((username === 'ADMIN' && password === '1234') || (username === 'MICHELL' && password === '221099')) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

// Función para manejar el registro de pacientes
document.getElementById('addPatientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('patientName').value;
    const info = document.getElementById('patientInfo').value;
    const photo = document.getElementById('patientPhoto').files[0];
    
    if (name && info) {
        const patientList = document.getElementById('patients');
        
        const listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${name}, Información: ${info}`;
        if (photo) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100px';
                listItem.appendChild(img);
            };
            reader.readAsDataURL(photo);
        }
        
        patientList.appendChild(listItem);
        
        // Limpiar formulario
        document.getElementById('addPatientForm').reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});


