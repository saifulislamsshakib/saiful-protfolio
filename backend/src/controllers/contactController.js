import Contact from "../models/Contact.js";
import transporter from "../config/mailer.js";
import validator from "validator";
import escapeHtml from "escape-html";

const createContact = async (req, res) => {
  try {
    let { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Convert to string + trim

    name = String(name).trim();
    email = String(email).trim().toLowerCase();
    subject = String(subject).trim();
    message = String(message).trim();

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({
        success: false,
        message: "Name must be between 2 and 100 characters.",
      });
    }

    if (subject.length < 2 || subject.length > 200) {
      return res.status(400).json({
        success: false,
        message: "Subject must be between 2 and 200 characters.",
      });
    }

    if (message.length < 10 || message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Message must be between 10 and 2000 characters.",
      });
    }

    // Escape HTML characters

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const safeMailSubject = subject.replace(/[\r\n]/g, " ");

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    try {
      await transporter.sendMail({
        from: `"Saiful Portfolio" <${process.env.MAIL_USER}>`,

        to: process.env.CONTACT_RECEIVER_EMAIL,

        replyTo: email,

        subject: ` New Portfolio Contact — ${safeMailSubject}`,

        // Plain-text version
        text: `
New Portfolio Contact

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

This message was submitted through your portfolio contact form.
        `,

        // HTML version
        html: `
          <div style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            padding: 30px;
            background: #f8fafc;
          ">

            <div style="
              background: #ffffff;
              padding: 30px;
              border-radius: 12px;
              border: 1px solid #e2e8f0;
            ">

              <h2 style="
                margin-top: 0;
                color: #0f172a;
              ">
                 New Portfolio Contact
              </h2>

              <p style="
                color: #64748b;
                font-size: 15px;
              ">
                Someone has contacted you through your portfolio website.
              </p>

              <hr style="
                border: none;
                border-top: 1px solid #e2e8f0;
                margin: 25px 0;
              " />

              <p>
                <strong>Name:</strong><br />
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong><br />
                <a href="mailto:${safeEmail}">
                  ${safeEmail}
                </a>
              </p>

              <p>
                <strong>Subject:</strong><br />
                ${safeSubject}
              </p>

              <p>
                <strong>Message:</strong>
              </p>

              <div style="
                background: #f8fafc;
                padding: 20px;
                border-radius: 8px;
                color: #334155;
                line-height: 1.6;
              ">
                ${safeMessage}
              </div>

              <div style="
                margin-top: 25px;
                padding-top: 20px;
                border-top: 1px solid #e2e8f0;
              ">
                <a
                  href="mailto:${safeEmail}"
                  style="
                    display: inline-block;
                    background: #2563eb;
                    color: #ffffff;
                    text-decoration: none;
                    padding: 10px 18px;
                    border-radius: 8px;
                    font-weight: 600;
                  "
                >
                  Reply to ${safeName}
                </a>
              </div>

              <p style="
                margin-top: 30px;
                color: #94a3b8;
                font-size: 12px;
              ">
                This message was submitted through your portfolio contact form.
              </p>

            </div>
          </div>
        `,
      });

      console.log("Contact notification email sent successfully.");
    } catch (emailError) {
      console.error("Email notification failed:", emailError.message);
    }

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact creation error:", error.message);

    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
};

export { createContact };
