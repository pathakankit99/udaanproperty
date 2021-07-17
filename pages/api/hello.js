// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

const {
  receiverEmail:REACT_APP_EMAILJS_RECEIVER,
  templateId:REACT_APP_EMAILJS_TEMPLATEID,
  user:REACT_APP_EMAILJS_USERID,
} = process.env

console.log(receiverEmail, templateId)