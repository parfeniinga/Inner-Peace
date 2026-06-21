document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseItems = document.querySelectorAll('.course-item');

    if (filterButtons.length > 0 && courseItems.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const level = this.getAttribute('data-level');

                courseItems.forEach(item => {
                    if (level === 'all' || item.getAttribute('data-level') === level) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInUp 0.4s ease forwards';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    console.log('Courses page loaded successfully!');
});