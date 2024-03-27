const body = document.querySelector('body');

function updateColorScheme() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDarkMode) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
}

// Actualizar los estilos cuando cambie la preferencia de color del sistema
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener(updateColorScheme);

// Actualizar los estilos al cargar la página
updateColorScheme();
