function showPaymentInfo() {
    const ticketCategory = document.getElementById("Ticket-Category").value;
    const paymentMethod = document.getElementById("payment_method").value;
    const proofUpload = document.getElementById("proof-upload");
    const fileInput = document.getElementById("media");

    // Sembunyikan semua informasi pembayaran terlebih dahulu
    document.getElementById("transfer-info").style.display = "none";
    document.getElementById("qris-info").style.display = "none";
    document.getElementById("cash-info").style.display = "none";
    document.getElementById("payment-info").style.display = "none";

    // Atur metode pembayaran berdasarkan kategori tiket
    if (ticketCategory === "presale-1" || ticketCategory === "presale-2" || ticketCategory === "presale-3") {
        // Cash tidak tersedia, hanya Transfer dan QRIS
        document.querySelector("option[value='cash']").style.display = "none";
        document.querySelector("option[value='transfer']").style.display = "block";
        document.querySelector("option[value='qris']").style.display = "block";

        if (paymentMethod === "transfer") {
            document.getElementById("transfer-info").style.display = "block";
        } else if (paymentMethod === "qris") {
            document.getElementById("qris-info").style.display = "block";
        }
    } else if (ticketCategory === "onthespot") {
        // Semua metode pembayaran tersedia
        document.querySelector("option[value='cash']").style.display = "block";
        document.querySelector("option[value='transfer']").style.display = "block";
        document.querySelector("option[value='qris']").style.display = "block";

        if (paymentMethod === "cash") {
            document.getElementById("cash-info").style.display = "block";
        } else if (paymentMethod === "transfer") {
            document.getElementById("transfer-info").style.display = "block";
        } else if (paymentMethod === "qris") {
            document.getElementById("qris-info").style.display = "block";
        }
    }

    // Tampilkan container payment-info jika ada metode pembayaran yang dipilih
    if (paymentMethod) {
        document.getElementById("payment-info").style.display = "block";
    }

    // Atur elemen "Upload proof of payment" hanya jika metode pembayaran adalah transfer atau qris
    if (paymentMethod === "cash") {
        proofUpload.style.display = "none";
        fileInput.required = false;
        fileInput.disabled = true;
    } else if (paymentMethod === "transfer" || paymentMethod === "qris") {
        proofUpload.style.display = "block";
        fileInput.required = true;
        fileInput.disabled = false;
    }

    // Reset payment method jika opsi tidak sesuai dengan kategori tiket
    if ((ticketCategory === "presale-1" || ticketCategory === "presale-2" || ticketCategory === "presale-3") && paymentMethod === "cash") {
        document.getElementById("payment_method").value = "";
    }
}

function showTicketInfo() {
    const ticketCategory = document.getElementById("Ticket-Category").value;

    // Sembunyikan semua informasi tiket terlebih dahulu
    document.getElementById("presale-1-info").style.display = "none";
    document.getElementById("presale-2-info").style.display = "none";
    document.getElementById("presale-3-info").style.display = "none";
    document.getElementById("onthespot-info").style.display = "none";

    // Tampilkan informasi berdasarkan kategori tiket yang dipilih
    if (ticketCategory === "presale-1") {
        document.getElementById("presale-1-info").style.display = "block";
    } else if (ticketCategory === "presale-2") {
        document.getElementById("presale-2-info").style.display = "block";
    } else if (ticketCategory === "presale-3") {
        document.getElementById("presale-3-info").style.display = "block";
    } else if (ticketCategory === "onthespot") {
        document.getElementById("onthespot-info").style.display = "block";
    }

    // Panggil fungsi showPaymentInfo untuk memperbarui metode pembayaran berdasarkan kategori tiket
    showPaymentInfo();
}