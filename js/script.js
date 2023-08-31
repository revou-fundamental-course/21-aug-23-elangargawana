function tombolSubmit() {
    const contactForm = document.getElementById("contact-form");
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const message = document.getElementById("contact-message").value;
  
    if (!name || !email || !phone || !message) {
      alert("Semua data harus diisi!");
    }
  
    console.log(`Nama : ${name}`);
    console.log(`Email : ${email}`);
    console.log(`Phone : ${phone}`);
    console.log(`Message : ${message}`);
  
    contactForm.reset();
  }
  