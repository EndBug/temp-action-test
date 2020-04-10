const {UBI_EMAIL, UBI_PASSWORD} = process.env
console.log(UBI_EMAIL)
console.log(UBI_PASSWORD)
console.log(!UBI_EMAIL || !UBI_PASSWORD)
