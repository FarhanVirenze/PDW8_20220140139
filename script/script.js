document.getElementById('clearForm').addEventListener('click', function() {
    document.getElementById('contactForm').reset();
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih telah menghubungi kami!');
});
