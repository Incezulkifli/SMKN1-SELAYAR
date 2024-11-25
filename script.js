document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector("#schoolCarousel");

    // Inisialisasi Bootstrap Carousel
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Durasi transisi antar slide (ms)
        ride: "carousel" // Mulai otomatis
    });

    console.log("Carousel berhasil diinisialisasi.");
});

// Fungsi untuk menangani pengiriman formulir
document.getElementById("join-us-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Menampilkan pesan sukses setelah pengiriman formulir
    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    // Menyembunyikan formulir setelah pengiriman
    document.getElementById("join-us-form").reset(); // Mengosongkan input formulir

    // Untuk demonstrasi, kita menunggu 5 detik dan kemudian menyembunyikan pesan sukses
    setTimeout(function() {
        successMessage.style.display = "none";
    }, 5000); // Pesan akan hilang setelah 5 detik
});

// Fungsi untuk menampilkan detail program saat diklik
function showProgramDetails(programName) {
    // Menampilkan panel detail program
    const detailSection = document.getElementById('program-detail');
    const programNameElement = document.getElementById('program-name');
    programNameElement.innerHTML = "Anda memilih program: " + programName;
    
    // Menampilkan div detail
    detailSection.style.display = 'block';

    // Menambahkan animasi untuk tampilan
    detailSection.classList.add('fade-in');
}

// CSS untuk animasi fade-in
 style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        animation: fadeIn 1s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
   // Pastikan pesan sukses disembunyikan saat halaman dimuat ulang
document.addEventListener("DOMContentLoaded", function () {
    const successMessage = document.getElementById("success-message");
    if (successMessage) {
        successMessage.style.display = "none"; // Sembunyikan pesan sukses
    }
});

// Fungsi untuk menangani submit form
document.getElementById("join-us-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form reload
    const successMessage = document.getElementById("success-message");

    // Tampilkan pesan sukses
    successMessage.style.display = "block";

    // Sembunyikan pesan setelah beberapa detik (opsional)
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000); // Pesan menghilang setelah 5 detik

    // Reset form setelah submit
    this.reset();
});
// Event untuk tombol Pilih
document.querySelectorAll('.pilih-jurusan').forEach(button => {
    button.addEventListener('click', function () {
        const jurusan = this.getAttribute('data-jurusan');
        const jurusanTerpilih = document.getElementById('jurusan-terpilih');
        const jurusanNama = document.getElementById('jurusan-nama');

        // Set nama jurusan yang dipilih
        jurusanNama.textContent = jurusan;

        // Tampilkan pesan konfirmasi
        jurusanTerpilih.style.display = 'block';

        // Sembunyikan pesan setelah 5 detik
        setTimeout(() => {
            jurusanTerpilih.style.display = 'none';
        }, 5000);
    });
});
button.addEventListener('click', function () {
    const jurusan = this.getAttribute('data-jurusan');
    console.log(`Jurusan yang dipilih: ${jurusan}`); // Debug
    jurusanNama.textContent = jurusan;
    jurusanTerpilih.style.display = 'block';
    
    setTimeout(() => {
        jurusanTerpilih.style.display = 'none';
    }, 5000);
});
