// custom.js

// Fungsi untuk menambahkan animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Animasi untuk card
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200); // Delay animasi untuk setiap card
    });

    // Animasi untuk carousel caption
    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    carouselCaptions.forEach((caption, index) => {
        setTimeout(() => {
            caption.style.opacity = '1';
            caption.style.transform = 'translateY(0)';
        }, index * 300); // Delay animasi untuk setiap caption
    });

    // Validasi formulir pencarian
    const searchForm = document.querySelector('form.d-flex');
    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            const searchInput = searchForm.querySelector('input[type="search"]');
            if (searchInput.value.trim() === '') {
                event.preventDefault();
                alert('Silakan masukkan kata kunci pencarian.');
            }
        });
    }

    // Tambahkan efek hover pada card
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            
            card.style.boxShadow = '0 4px 8px rgba(255, 193, 7, 0.3)';
        });
        card.addEventListener('mouseleave', function () {
            card.style.boxShadow = 'none';
        });
    });
});

// Fungsi untuk menambahkan tahun saat ini di footer
function updateFooterYear() {
    const footer = document.querySelector('footer');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `<p>&copy; ${year} TOURGUIDE. All rights reserved.</p>`;
    }
}

// Panggil fungsi updateFooterYear saat halaman dimuat
updateFooterYear();