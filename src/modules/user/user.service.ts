import { ApplicationError } from "../../utils/ApplicationError";
import { UserNotFoundError } from "./user.error";
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com12",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "anjanashakthi114@gmail.com",
      pass: "zknp coof hxxu kklt",
    },
  });

export const fetchUsers = async() => {
    console.log('aaaaaaaaaaaaaaaaa')
    const user = {name: 'anjana'}

    const mailOptions = {
        from: 'anjanashakthi114@gmail.com',
        to: 'anjanashakthi95@gmail.com',
        subject: 'Test Email',
        text: 'This is a test email sent using Nodemailer.',
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {

          throw error;
        }
        console.log('Email sent: ' + info.response);
      });


    // const info = await transporter.sendMail({
    //     from: '"Maddison Foo Koch 👻" <anjanashakthi114@gmail.com>', // sender address
    //     to: "anjanashakthi95@gmail.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   });

    //   console.log("Message sent: %s", info.messageId);

    // if(user){
    //     throw new UserNotFoundError()
    // }
    return user;
}

export const createUser = (user:any) => {
    return user
}