document.addEventListener("DOMContentLoaded", function() {

    // --- Efeito Typewriter (Máquina de Escrever) ---
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const phrases = ["Desenvolvedor Web", "Estudante de Análise de Sistemas", "Entusiasta de Tecnologia", "Futuro Dev Full-Stack"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typingSpeed = isDeleting ? 100 : 150;

            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            setTimeout(type, typingSpeed);
        }
        
        type(); 
    }

    // --- CONFIGURAÇÃO DO CARROSSEL (SWIPER) ---
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,      // Mobile: mostra 1 card
        spaceBetween: 25,      // Espaço entre os cards
        loop: true,            // Carrossel infinito
        grabCursor: true,      // Cursor de mãozinha
        pagination: {
            el: ".swiper-pagination",
            clickable: true,   // Pode clicar nas bolinhas
        },
        autoplay: {
            delay: 4000,       // Passa sozinho a cada 4 seg
            disableOnInteraction: false,
        },
        // Pontos de quebra (Responsividade)
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2, // Tablet: mostra 2 cards
            },
            1024: {
                slidesPerView: 3, // PC: mostra 3 cards
            },
        },
    });


    // --- Animação de Fade-in ao Rolar ---
    const sectionsToFade = document.querySelectorAll('.fade-in-section');

    if (sectionsToFade.length) {
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.15 
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        sectionsToFade.forEach(section => {
            observer.observe(section);
        });
    }

});