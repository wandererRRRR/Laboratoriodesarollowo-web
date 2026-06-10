document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear el botón de forma dinámica
    const toggleButton = document.createElement('button');
    toggleButton.textContent = "Alternar Modo";
    toggleButton.className = "btn-cta";
    toggleButton.setAttribute('aria-label', 'Cambiar entre modo claro y oscuro'); // Mejora de accesibilidad
    
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

    // 4. Evento de clic
    toggleButton.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});