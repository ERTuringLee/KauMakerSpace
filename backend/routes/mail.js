var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport')
var ejs = require('ejs')
const transporter = nodemailer.createTransport(smtpTransport({
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: "kaulogiclab@gmail.com",
    pass: "shsflghlfhdusrntlf"
  },
  secure: true
}))

module.exports = {
  mailSend: function (ejsFile, data,userName, userEmail) {
    ejs.renderFile(ejsFile, data, function (err, mData) {
        if (err) throw err;
        var mOptions = {
          from: "kaulogiclab@gmail.com",
          to: "maker@kau.ac.kr",
          subject: userName + "님이 장비 및 공간 신청했습니다.",
          html: mData
        }
        transporter.sendMail(mOptions)
        var mOptions1 = {
            from: "kaulogiclab@gmail.com",
            to: userEmail,
            subject: userName + "님, 신청이 완료되었습니다.",
            text: "신청이 완료되었습니다. 차후에 연락드리겠습니다."
        }
        transporter.sendMail(mOptions1)
    })
  }
}