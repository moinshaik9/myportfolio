(function() {
    // typing effect
    const words = ['Full Stack Developer', 'Cloud Engineer', 'Java & Node.js', 'AWS Enthusiast'];
    let i = 0, j = 0, isDeleting = false;
    const el = document.getElementById('typing');
    function type() {
        const current = words[i];
        if (!isDeleting) {
            el.textContent = current.substring(0, j+1);
            j++;
            if (j === current.length) { isDeleting = true; setTimeout(type, 2000); return; }
            setTimeout(type, 100);
        } else {
            el.textContent = current.substring(0, j-1);
            j--;
            if (j === 0) { isDeleting = false; i = (i+1) % words.length; setTimeout(type, 400); return; }
            setTimeout(type, 60);
        }
    }
    type();

    // progress bar
    window.addEventListener('scroll', () => {
        const st = window.scrollY;
        const dh = document.documentElement.scrollHeight - window.innerHeight;
        document.getElementById('progressBar').style.width = (dh ? (st / dh) * 100 : 0) + '%';
    });

    // top button
    const topBtn = document.getElementById('topBtn');
    window.addEventListener('scroll', () => {
        topBtn.style.display = window.scrollY > 600 ? 'flex' : 'none';
    });
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.skill-card, .project-card, .edu-card, .cert-card, .about-text, .contact-form, #deployment > div').forEach(el => {
        if (!el.classList.contains('show')) { el.classList.add('hidden'); observer.observe(el); }
    });

    // mobile menu
    document.getElementById('menuToggle')?.addEventListener('click', function() {
        const nav = document.querySelector('.nav-links');
        if (nav) {
            if (nav.style.display === 'flex') { nav.style.display = 'none'; } else {
                nav.style.display = 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '70px';
                nav.style.left = '5%';
                nav.style.width = '90%';
                nav.style.background = '#0b0d15ee';
                nav.style.backdropFilter = 'blur(18px)';
                nav.style.padding = '20px';
                nav.style.borderRadius = '30px';
                nav.style.gap = '18px';
                nav.style.border = '1px solid #1f263a';
            }
        }
    });

    // contact form
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for reaching out! I\'ll get back to you soon.');
        this.reset();
    });
})();