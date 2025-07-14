// Detectar clic en las asignaturas para mostrar más detalles
document.querySelectorAll('.course').forEach(course => {
    course.addEventListener('click', function() {
        alert(`Has seleccionado: ${course.textContent.trim()}`);
    });
});

// Detectar clic en los semestres
document.querySelectorAll('.semester').forEach(semester => {
    semester.addEventListener('click', function() {
        alert(`Has seleccionado el semestre: ${semester.textContent.trim()}`);
    });
});

// Certificaciones
document.querySelectorAll('.certification').forEach(certification => {
    certification.addEventListener('click', function() {
        alert(`Certificación seleccionada: ${certification.textContent.trim()}`);
    });
});
