// ===== SENAI PROJETO INTEGRADOR - JAVASCRIPT ===== //

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initNavigation();
    initScrollEffects();
    initForms();
    initAnimations();
    initMobileMenu();
});

// ===== NAVEGAÇÃO ===== //
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Marcar página ativa
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Navegação suave para âncoras
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== EFEITOS DE SCROLL ===== //
function initScrollEffects() {
    const header = document.querySelector('.header');
    
    // Efeito de scroll no header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animação de elementos ao entrar na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos com classe 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===== FORMULÁRIOS ===== //
function initForms() {
    // Formulário de Briefing
    const briefingForm = document.getElementById('briefing-form');
    if (briefingForm) {
        briefingForm.addEventListener('submit', handleBriefingSubmit);
    }
    
    // Formulário de Dúvidas
    const faqForm = document.getElementById('faq-form');
    if (faqForm) {
        faqForm.addEventListener('submit', handleFaqSubmit);
    }
    
    // Validação em tempo real
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.addEventListener('blur', validateField);
        control.addEventListener('input', clearFieldError);
    });
}

function handleBriefingSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validar campos obrigatórios
    if (!validateBriefingForm(data)) {
        return;
    }
    
    // Simular envio (em produção, enviar para servidor)
    showSuccessMessage('Briefing enviado com sucesso! Entraremos em contato em breve.');
    e.target.reset();
}

function handleFaqSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validar campos obrigatórios
    if (!validateFaqForm(data)) {
        return;
    }
    
    // Simular envio (em produção, enviar para servidor)
    showSuccessMessage('Sua dúvida foi enviada com sucesso! Responderemos em breve.');
    e.target.reset();
    
    // Adicionar pergunta à lista de perguntas recentes
    addRecentQuestion(data.nome, data.pergunta);
}

function validateBriefingForm(data) {
    let isValid = true;
    
    // Campos obrigatórios
    const requiredFields = ['projeto-nome', 'integrante1-nome', 'integrante1-curso', 'desafio', 'objetivos'];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            showFieldError(field, 'Este campo é obrigatório');
            isValid = false;
        }
    });
    
    // Validar email se fornecido
    if (data['email'] && !isValidEmail(data['email'])) {
        showFieldError('email', 'Por favor, insira um email válido');
        isValid = false;
    }
    
    return isValid;
}

function validateFaqForm(data) {
    let isValid = true;
    
    // Campos obrigatórios
    const requiredFields = ['nome', 'email', 'pergunta'];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            showFieldError(field, 'Este campo é obrigatório');
            isValid = false;
        }
    });
    
    // Validar email
    if (data['email'] && !isValidEmail(data['email'])) {
        showFieldError('email', 'Por favor, insira um email válido');
        isValid = false;
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Limpar erro anterior
    clearFieldError(e);
    
    // Validar campo obrigatório
    if (field.hasAttribute('required') && value === '') {
        showFieldError(field.name, 'Este campo é obrigatório');
        return;
    }
    
    // Validar email
    if (field.type === 'email' && value !== '' && !isValidEmail(value)) {
        showFieldError(field.name, 'Por favor, insira um email válido');
        return;
    }
}

function clearFieldError(e) {
    const field = e.target;
    const errorElement = document.querySelector(`[data-error="${field.name}"]`);
    if (errorElement) {
        errorElement.remove();
    }
    field.classList.remove('error');
}

function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    // Remover erro anterior
    const existingError = document.querySelector(`[data-error="${fieldName}"]`);
    if (existingError) {
        existingError.remove();
    }
    
    // Adicionar classe de erro
    field.classList.add('error');
    
    // Criar elemento de erro
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.setAttribute('data-error', fieldName);
    errorElement.textContent = message;
    
    // Inserir após o campo
    field.parentNode.insertBefore(errorElement, field.nextSibling);
}

function showSuccessMessage(message) {
    // Criar elemento de sucesso
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.innerHTML = `
        <div class="success-content">
            <span class="success-icon">✓</span>
            <span class="success-text">${message}</span>
        </div>
    `;
    
    // Adicionar ao body
    document.body.appendChild(successElement);
    
    // Remover após 5 segundos
    setTimeout(() => {
        successElement.remove();
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function addRecentQuestion(nome, pergunta) {
    const recentQuestions = document.querySelector('.recent-questions');
    if (!recentQuestions) return;
    
    const questionElement = document.createElement('div');
    questionElement.className = 'recent-question fade-in-up';
    questionElement.innerHTML = `
        <div class="question-header">
            <strong>${nome}</strong>
            <span class="question-date">Agora</span>
        </div>
        <div class="question-text">${pergunta}</div>
    `;
    
    // Adicionar no início da lista
    recentQuestions.insertBefore(questionElement, recentQuestions.firstChild);
    
    // Limitar a 5 perguntas
    const questions = recentQuestions.querySelectorAll('.recent-question');
    if (questions.length > 5) {
        questions[questions.length - 1].remove();
    }
}

// ===== ANIMAÇÕES ===== //
function initAnimations() {
    // Animação de contadores (se houver)
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        animateCounter(counter);
    });
    
    // Animação de progresso (se houver)
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        animateProgressBar(bar);
    });
}

function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
    }, 16);
}

function animateProgressBar(bar) {
    const target = parseInt(bar.getAttribute('data-progress'));
    const duration = 1500; // 1.5 segundos
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        bar.style.width = current + '%';
    }, 16);
}

// ===== MENU MOBILE ===== //
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// ===== FAQ ACCORDION ===== //
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Fechar todos os outros itens
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Abrir/fechar o item atual
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ===== UTILITÁRIOS ===== //
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== INICIALIZAÇÃO ESPECÍFICA POR PÁGINA ===== //
if (document.querySelector('.faq-item')) {
    initFaqAccordion();
}

