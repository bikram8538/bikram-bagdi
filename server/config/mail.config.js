const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    family: 4, // Force IPv4
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
});

transporter.verify((error, success) => {
    if (error) {
        console.error("❌ SMTP Verify Error:", error);
    } else {
        console.log("✅ SMTP Ready", success);
    }
});

module.exports = transporter;