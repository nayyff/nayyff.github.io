const scriptURL =
    "https://script.google.com/macros/s/AKfycbwKYCRQlk9fbjX7jzaO5hY9zzd3R1R2c6NvLV8XOvEqCXRubRe26VZVVvd-EL68S2xn/exec";
const form = document.forms["submit-to-google-sheet"];
const fileInput = document.getElementById("media");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // Handle the file upload
    if (!fileInput.disabled && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        // Size validation here, only less than 2MB allowed
        if (file.size > 1024 * 1024 * 2) {
            swal("Error", "File size should be less than 2MB.", "error");
            return;
        }

        reader.onload = async function () {
            formData.append("media", reader.result.split(",")[1]); // Append base64 data
            await submitForm(formData);
        };

        reader.readAsDataURL(file);
    } else {
        // Skip file upload if disabled or no file provided
        await submitForm(formData);
    }
});

async function submitForm(formData) {
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.innerText = "Loading...";

    fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
            swal("Done", "Submitted Successfully, please check your email", "success");
            form.reset();
        })
        .catch((error) => {
            swal("Error", "Something went wrong. Please try again!", "error");
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.innerText = "Submit";
        });
}