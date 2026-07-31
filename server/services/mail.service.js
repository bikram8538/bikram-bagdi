const transporter = require("../config/mail.config");

exports.sendMail = async (contactData) => {

    const { name, email, message } = contactData;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `🚀 New Portfolio Contact from ${name}`,

        html: `
        <div style="
            max-width:600px;
            margin:auto;
            background:#ffffff;
            border:1px solid #e5e5e5;
            border-radius:12px;
            overflow:hidden;
            font-family:Arial,sans-serif;
        ">

            <div style="
                background:#111827;
                color:#ffffff;
                padding:24px;
                text-align:center;
            ">
                <h2 style="margin:0;">
                    🚀 New Portfolio Contact
                </h2>
            </div>

            <div style="padding:24px;">

                <p>
                    <strong>👤 Name</strong><br>
                    ${name}
                </p>

                <p>
                    <strong>📧 Email</strong><br>
                    ${email}
                </p>

                <p>
                    <strong>💬 Message</strong>
                </p>

                <div style="
                    background:#f5f5f5;
                    padding:16px;
                    border-radius:8px;
                    white-space:pre-wrap;
                ">
                    ${message}
                </div>

            </div>

            <div style="
                background:#f9fafb;
                padding:16px;
                text-align:center;
                color:#666;
                font-size:14px;
            ">
                Sent from your Portfolio Website
            </div>

        </div>
    `,
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully!");
};