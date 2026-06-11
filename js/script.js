document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear el botón de forma dinámica para el modo oscuro
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Alternar Modo";
    toggleButton.className = "btn-cta";
    toggleButton.setAttribute('aria-label', 'Cambiar entre modo claro y oscuro');
    
    // Añadirlo al nav
    const nav = document.querySelector('nav');
    nav.appendChild(toggleButton);

    // 2. Función para aplicar el tema
    const applyTheme = (isDark) => {
        document.body.classList.toggle('dark-mode', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    // 3. Recuperar preferencia al cargar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
    }

    // 4. Evento de clic para modo oscuro
    toggleButton.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // 5. Funcionalidad del botón "Enviar" en suscripción (Noticias)
    // Buscamos el botón dentro de la sección de noticias
    const btnEnviar = document.querySelector('.columna button.btn-cta');
    if (btnEnviar) {
        btnEnviar.addEventListener('click', (e) => {
            e.preventDefault(); // Previene recarga de página si está en un form
            alert("¡Gracias por suscribirte! Recibirás nuestras noticias pronto.");
        });
    }
});