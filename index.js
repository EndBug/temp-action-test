require('dotenv').config()
const email = process.env.UBI_EMAIL,
      password = process.env.UBI_PASSWORD;

console.log(email)
console.log(password)
console.log(!email || !password)
