const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

transporter.verify((error) => {
    if (error) {
        console.error("❌ SMTP Error:", error);
    } else {
        console.log("✅ SMTP Server Ready");
    }
});

module.exports = transporter;