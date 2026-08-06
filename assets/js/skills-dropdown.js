document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.skill-dropdown-toggle');

    toggles.forEach((btn) => {
        const content = btn.nextElementSibling;
        if (!content || !content.classList.contains('skill-dropdown-content')) return;

        btn.addEventListener('click', () => {
            const isOpen = content.classList.contains('open');

            if (isOpen) {
                content.style.maxHeight = '0px';
                content.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            } else {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                btn.setAttribute('aria-expanded', 'true');
            }
        });

        // Keep open panels sized correctly on window resize
        window.addEventListener('resize', () => {
            if (content.classList.contains('open')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});