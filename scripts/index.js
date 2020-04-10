require('dotenv').config()
const email = process.env.UBI_EMAIL,
      password = process.env.UBI_PASSWORD;

console.log(!!email)
console.log(!!password)
if (!email || !password) throw new Error('Cannot update file without API credentials');
