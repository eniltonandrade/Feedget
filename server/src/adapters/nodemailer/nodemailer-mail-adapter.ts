import { MailAdapter, SendEmailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "20eb56f51d2974",
        pass: "9a81a149655556"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendEmailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedgat.com>',
            to: 'Enilton Andrade <enilton.andrade@hotmail.com.br',
            subject: subject,
            html: body
        })
    };
}