const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3000; // Using environment variable or default port 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Using environment variables for email and password
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error('Please provide EMAIL_USER and EMAIL_PASS as environment variables.');
  process.exit(1);
}

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER, // Use environment variables here
    pass: EMAIL_PASS, // Use environment variables here
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName; // Corrected typo here
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "naini94229@gmail.com",
    subject: "Someone from your Portfolio trying to contact with you",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
