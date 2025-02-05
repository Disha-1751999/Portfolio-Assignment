import nodemailer from "nodemailer";

const SendEmail=async(EmailForm,EmailText,EmailSubject)=>{


    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: 'deshadas799@gmail.com', 
          pass: 'oukz ygvi dukd ngnh',
        },
    })

    let mailOptions = {
        from:EmailForm,
        to:'deshadas799@gmail.com',
        subject:EmailSubject,
        text:EmailText
    }


    return await transporter.sendMail(mailOptions)
}

export default SendEmail;