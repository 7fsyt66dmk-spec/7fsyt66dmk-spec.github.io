// Ждем полной загрузки DOM-дерева перед выполнением скриптов
document.addEventListener('DOMContentLoaded', () => {

    // === 1. Эффект "липкой" шапки при прокрутке ===
    const header = document.getElementById('main-header');
    
    // Слушаем событие прокрутки страницы
    window.addEventListener('scroll', () => {
        // Если прокрутили больше 50 пикселей — добавляем класс
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            // Иначе — убираем класс
            header.classList.remove('scrolled');
        }
    });

    // === 2. Анимация появления картинки при загрузке ===
    const heroImage = document.getElementById('hero-image');
    
    // Небольшая задержка, чтобы браузер успел отрисовать страницу
    setTimeout(() => {
        // Добавляем класс, который запускает CSS-анимацию
        heroImage.classList.add('visible');
    }, 200);

    // === 3. Плавная прокрутка для ссылок навигации ===
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Предотвращаем стандартное поведение ссылки (резкий переход)
            e.preventDefault();
            
            // В реальном проекте здесь был бы код для прокрутки к нужной секции.
            // Сейчас просто выводим в консоль, что клик работает.
            console.log('Клик по ссылке:', link.textContent);
            
            // Пример плавной прокрутки к картинке при клике на любую ссылку:
            heroImage.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        });
    });

    // === 4. Обработка клика по кнопке Telegram ===
    const telegramBtn = document.querySelector('.telegram-btn');
    
    telegramBtn.addEventListener('click', () => {
        console.log('Переход в Telegram...');
        // Ссылка уже указана в HTML (href), так что переход произойдет автоматически.
        // Этот код нужен для аналитики, например: 
        // ym(XXXXXX, 'reachGoal', 'telegram_click');
    });

});