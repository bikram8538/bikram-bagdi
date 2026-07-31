import { sendContact } from "./api";
import { showToast } from "./toast";

export function initContact() {
    const form = document.querySelector("#contact-form");

    if (!form) return;

    const submitBtn = form.querySelector("#contact-submit");
    const btnText = submitBtn.querySelector(".btn-text");

    form.addEventListener("submit", handleSubmit);

    function resetButton() {
        btnText.textContent = "Send Message";
        submitBtn.disabled = false;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            message: form.message.value.trim(),
        };

        try {
            // Loading State
            submitBtn.disabled = true;
            btnText.textContent = "Sending...";

            const data = await sendContact(formData);

            if (data.success) {
                btnText.textContent = "Sent ✓";

                form.reset();

                showToast(
                    "success",
                    "Message Sent",
                    "Thanks! I'll get back to you soon."
                );

                setTimeout(resetButton, 2000);

            } else {
                resetButton();

                showToast(
                    "error",
                    "Submission Failed",
                    data.message || "Something went wrong."
                );
            }

        } catch (error) {
            console.error("Contact Form Error:", error);

            resetButton();

            showToast(
                "error",
                "Server Error",
                "Please try again later."
            );
        }
    }
}