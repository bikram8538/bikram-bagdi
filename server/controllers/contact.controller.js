const { sendMail } = require("../services/mail.service");

exports.sendContact = async (req, res) => {
    try {
        await sendMail(req.body);

        return res.status(200).json({
            success: true,
            message: "Email sent successfully!",
        });

    } catch (error) {
        console.error("❌ MAIL ERROR:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to send email.",
            error: error.message,
        });
    }
};