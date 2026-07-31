const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error) => {
    if (error) {
        console.error("❌ SMTP Error:", error.message);
    } else {
        console.log("✅ SMTP Server Ready");
    }
});

module.exports = transporter;