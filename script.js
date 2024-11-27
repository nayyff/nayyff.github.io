function showPaymentInfo() {
    const ticketCategory = document.getElementById("Ticket-Category").value;
    const paymentMethod = document.getElementById("payment_method").value;
    const proofUpload = document.getElementById("proof-upload");
    const fileInput = document.getElementById("media");

    // Sembunyikan semua informasi pembayaran terlebih dahulu
    document.getElementById("transfer-info").style.display = "none";

    // Atur metode pembayaran hanya untuk kategori presale-1
    if (ticketCategory === "presale-2") {
        if (paymentMethod === "transfer") {
            document.getElementById("transfer-info").style.display = "block";
        }
    }

    // Tampilkan container payment-info jika metode pembayaran dipilih
    if (paymentMethod) {
        document.getElementById("payment-info").style.display = "block";
    }

    // Atur elemen "Upload proof of payment" hanya jika metode pembayaran adalah transfer
    if (paymentMethod === "transfer") {
        proofUpload.style.display = "block";
        fileInput.required = true;
        fileInput.disabled = false;
    }
}

function showTicketInfo() {
    const ticketCategory = document.getElementById("Ticket-Category").value;

    // Sembunyikan semua informasi tiket terlebih dahulu
    document.getElementById("presale-2-info").style.display = "none";

    // Tampilkan informasi berdasarkan kategori tiket yang dipilih
    if (ticketCategory === "presale-2") {
        document.getElementById("presale-2-info").style.display = "block";
    }

    // Panggil fungsi showPaymentInfo untuk memperbarui metode pembayaran berdasarkan kategori tiket
    showPaymentInfo();
}
