<script>
    document.querySelectorAll('#offers .offer-card').forEach(card => {
        card.addEventListener('click', () => {
            alert(card.getAttribute('data-offer'))
        })
    });
    document.querySelectorAll(".food-item button").forEach(button => {
        button.addEventListener("click", () => {
            alert("✅ Your order has been placed! Thank you for using SmartRail.")
        })
    });
</script>
<script>
    document.querySelectorAll('#offers .offer-card').forEach(card => {
        card.addEventListener('click', () => {
            alert(card.getAttribute('data-offer'));
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        if (!name || !email || !message) {
            alert('Please fill all fields in the contact form.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        this.reset();
        const confirmation = document.getElementById('contact-confirmation');
        confirmation.textContent = 'Thank you for contacting us! We will get back to you shortly.';
        setTimeout(() => {
            confirmation.textContent = '';
        }, 6000);
    });
</script>
<script>
    function updateClock() {
        const now = new Date();
        document.getElementById("clock").textContent =
            now.toLocaleTimeString('en-IN', {
                hour12: true
            });
    }
    setInterval(updateClock, 1000);
    updateClock();
</script>
<script>
    let slideIndex = 0;
    const slideContainer = document.getElementById("carousel-slide");
    const slides = document.querySelectorAll(".carousel-image");

    // Create indicators
    const indicators = document.getElementById("carousel-indicators");
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("carousel-dot");
        if (index === 0) dot.classList.add("active");
        dot.onclick = () => goToSlide(index);
        indicators.appendChild(dot);
    });

    function showSlide(index) {
        slideContainer.style.transform = `translateX(${-index * 100}%)`;

        // Update active dot
        document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        slideIndex = index;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    function goToSlide(index) {
        showSlide(index);
    }

    // Auto-play every 4 seconds
    setInterval(nextSlide, 4000);

    // Show the first slide initially
    showSlide(slideIndex);
</script>
