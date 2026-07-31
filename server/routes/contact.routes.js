const express = require("express");

const router = express.Router();

const { sendContact } = require("../controllers/contact.controller");
const { validateContact } = require("../middleware/validateContact");
const contactLimiter = require("../middleware/rateLimiter");
const { body } = require("express-validator");

router.post(
    "/contact",

    body("name")
        .trim()
        .isLength({ min: 2 })
        .withMessage("Name must be at least 2 characters."),

    body("email")
        .isEmail()
        .withMessage("Please enter a valid email."),

    body("message")
        .trim()
        .isLength({ min: 10 })
        .withMessage("Message must be at least 10 characters."),

    contactLimiter,
    validateContact,
    sendContact
);

module.exports = router;