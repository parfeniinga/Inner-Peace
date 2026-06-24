document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    if (form) {
        loadSavedData();

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
                saveFormData();
                
                alert('Cererea ta a fost trimisă cu succes! Te așteptăm la Inner Peace.');
                form.reset();
                
                displaySubmissions();
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

    function saveFormData() {
        const formData = {
            id: Date.now(),
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            yogaType: document.getElementById('yogaType').value,
            experience: document.getElementById('experience').value,
            message: document.getElementById('message').value.trim(),
            date: new Date().toLocaleString('ro-RO')
        };

        let submissions = JSON.parse(localStorage.getItem('yogaSubmissions')) || [];
        submissions.push(formData);
        localStorage.setItem('yogaSubmissions', JSON.stringify(submissions));
        
        console.log('Date salvate în localStorage:', formData);
        console.log('Total înscrieri:', submissions.length);
    }

    function loadSavedData() {
        const submissions = JSON.parse(localStorage.getItem('yogaSubmissions')) || [];
        if (submissions.length > 0) {
            const last = submissions[submissions.length - 1];
        }
    }

    function displaySubmissions() {
        const submissions = JSON.parse(localStorage.getItem('yogaSubmissions')) || [];
        console.log('TOATE ÎNSCRIERILE');
        submissions.forEach((sub, index) => {
            console.log(`#${index + 1}: ${sub.name} - ${sub.email} - ${sub.yogaType} - ${sub.date}`);
        });
        console.log(`Total: ${submissions.length} înscrieri`);
    }

    displaySubmissions();
});
