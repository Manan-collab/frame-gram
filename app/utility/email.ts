import { createTransport } from 'nodemailer';
const { EMAIL_PASSWORD } = process.env;
const transport = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'oliver.eichmann96@ethereal.email',
        pass: EMAIL_PASSWORD
    },
    tls:{
        rejectUnauthorized:false
    }
});
export const sendEmail = async (
    to: string | string[],
    subject: string,
    message: string,
    html:string
) => {
    try {
        await transport.sendMail({
            to,
            subject,
            text: message,
            html : html,
            from: "info@f1standing.com"
        });
        return true;
    } catch (e) {
        throw e;
    }
}
