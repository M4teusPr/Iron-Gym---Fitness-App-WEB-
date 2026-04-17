// Main JavaScript para controlar a landing page

function scrollToDemo() {
    document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
}

// Controle de navegação das telas
const deviceScreen = document.getElementById('deviceScreen');
const screenButtons = document.querySelectorAll('.screen-btn');

let currentScreen = 'welcome';

// Função para trocar de tela com animação
function switchScreen(screenName) {
    if (currentScreen === screenName) return;
    
    // Animação de fade out
    deviceScreen.style.opacity = '0';
    deviceScreen.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        // Atualiza o conteúdo
        deviceScreen.innerHTML = screens[screenName];
        currentScreen = screenName;
        
        // Animação de fade in
        deviceScreen.style.opacity = '1';
        deviceScreen.style.transform = 'scale(1)';
        
        // Atualiza botões ativos
        screenButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.screen === screenName) {
                btn.classList.add('active');
            }
        });
    }, 300);
}

// Event listeners para os botões de navegação
screenButtons.forEach(button => {
    button.addEventListener('click', () => {
        const screen = button.dataset.screen;
        switchScreen(screen);
    });
});

// Carrega a tela inicial
window.addEventListener('DOMContentLoaded', () => {
    deviceScreen.innerHTML = screens.welcome;
    deviceScreen.style.transition = 'all 0.3s ease-in-out';
});

// Auto-rotation de telas (opcional - demo automático)
let autoRotate = false;
let rotationInterval;

function startAutoRotation() {
    if (autoRotate) return;
    
    autoRotate = true;
    const screenOrder = ['welcome', 'login', 'home', 'workout', 'exercises', 'profile'];
    let currentIndex = 0;
    
    rotationInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % screenOrder.length;
        switchScreen(screenOrder[currentIndex]);
    }, 4000);
}

function stopAutoRotation() {
    autoRotate = false;
    clearInterval(rotationInterval);
}

// Para a rotação automática quando o usuário interage
screenButtons.forEach(button => {
    button.addEventListener('click', stopAutoRotation);
});

// Animações de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observa elementos para animar no scroll
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar transparente ao rolar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});