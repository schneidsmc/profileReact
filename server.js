// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const PORT = 3001;

const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow these HTTP methods
    optionsSuccessStatus: 200 // Some legacy browsers (IE11) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'schneidsmc@gmail.com',
                pass: 'qmjm aobb gkoq pftd'
            }
        });

        const mailOptions = {
            from: 'schneidsmc@gmail.com',
            to: 'schneidsmc@gmail.com',
            subject: 'New Form Submission',
            text: `You have a new form submission:\nName: ${name}\nEmail: ${email}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
