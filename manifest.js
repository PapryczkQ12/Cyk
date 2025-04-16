 Sprawdzanie czy urządzenie to iOS
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (isIOS) {
    // Dodatkowa konfiguracja dla iOS
    if ('standalone' in navigator && !navigator.standalone) {
        // Aplikacja nie jest zainstalowana
        console.log('Można zainstalować na iOS');
    }
} else if ('serviceWorker' in navigator) {
    // Standardowa rejestracja Service Worker dla innych platform
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker zarejestrowany');
            })
            .catch(error => {
                console.log('Błąd rejestracji ServiceWorker: ', error);
            });
    });
}

// Obsługa instalacji
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

