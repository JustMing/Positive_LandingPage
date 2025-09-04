const nodemailer = require('nodemailer');
const { default: hbs } = require('nodemailer-express-handlebars');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const handlebarOptions = {
  viewEngine: {
    extname: '.hbs',
    partialsDir: path.resolve('./src/resources/views/email/'),
    layoutsDir: path.resolve('./src/resources/views/email/'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./src/resources/views/email/'),
  extName: '.hbs',
};

// quan trọng: dùng .use với hbs đúng export
transporter.use('compile', hbs(handlebarOptions));

async function sendMail(to, subject, template, context) {
  try {
    const info = await transporter.sendMail({
      from: `"POSITIVE" <${process.env.MAIL_USER}>`,
      to,
      subject,
      template, // tên file hbs
      context,
    });

    console.log('Mail sent:', info.messageId);
  } catch (error) {
    console.error('Error sending mail:', error);
  }
}

module.exports = { sendMail };
