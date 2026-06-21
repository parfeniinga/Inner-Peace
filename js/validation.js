document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            const name = document.getElementById('name');
            if (!name.value.trim() || name.value.trim().length < 2) {
                name.classList.add('is-invalid');
                isValid = false;
            } else {
                name.classList.remove('is-invalid');
            }

            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                email.classList.add('is-invalid');
                isValid = false;
            } else {
                email.classList.remove('is-invalid');
            }

            const phone = document.getElementById('phone');
            const phoneRegex = /^[0-9]{9,12}$/;
            if (!phone.value.trim() || !phoneRegex.test(phone.value.trim().replace(/\s/g, ''))) {
                phone.classList.add('is-invalid');
                isValid = false;
            } else {
                phone.classList.remove('is-invalid');
            }

            if (isValid) {
                alert('Cererea ta a fost trimisă cu succes! Te așteptăm la Inner Peace.');
                form.reset();
            } else {
                alert('Te rugăm să completezi corect toate câmpurile obligatorii.');
            }
        });

        document.querySelectorAll('#contactForm .form-control, #contactForm .form-select').forEach(input => {
            input.addEventListener('input', function () {
                this.classList.remove('is-invalid');
            });
        });
    }
});