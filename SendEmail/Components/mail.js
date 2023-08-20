const nodemailer = require("nodemailer");

const mail = async (req, res) => {
    res.send("I am sending mail");

    
const transporter = nodemailer.createTransport({
    host: 	" 	smtp.ethereal.email",
    port:  	587,
    auth: {
        // TODO: replace `user` and `pass` values from etharial
        user: ' delmer17@ethereal.email',
        pass: ' 	wEuFHkaGQ11Af4S4J8'
    }
});
async function main() {
    // send mail with defined transport object
    try {
        const info = await transporter.sendMail({
            from: '"Hlo every one" <vickyjoshi@gmail.com>', // sender address
            to: "bsntballabhjoshi@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          });
        
          console.log("Message sent:", info.messageId); 
          res.json(info)
    } catch (error) {
     console.log(error);   
    }
}
}

module.exports = mail;
