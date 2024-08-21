document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // Burger menu toggle
    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Sticky header change on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation with feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let valid = true;

            inputs.forEach(input => {
                const error = input.nextElementSibling;
                if (input.value.trim() === '') {
                    valid = false;
                    input.classList.add('invalid');
                    error.textContent = `${input.placeholder} is required.`;
                    error.style.display = 'block';
                } else {
                    input.classList.remove('invalid');
                    error.textContent = '';
                    error.style.display = 'none';
                }
            });

            if (valid) {
                alert('Form submitted successfully!');
                form.reset();
            }
        });
    });

    // Password visibility toggle
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', () => {
            const input = button.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                button.textContent = 'Hide';
            } else {
                input.type = 'password';
                button.textContent = 'Show';
            }
        });
    });

    
});




 // FAQ Accordion Functionality
 document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item h3');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;

            // Close other accordion items
            document.querySelectorAll('.accordion-content').forEach(content => {
                if (content !== item.nextElementSibling) {
                    content.style.display = 'none';
                }
            });

            // Toggle the clicked item
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});