import nodemailer from "nodemailer";

const config = () => {
    return {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "3091acf9d9ed6c",
            pass: "df7a50b4cb7cbc",
        },
    };
};

export const transport = nodemailer.createTransport(config());

