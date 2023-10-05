const mongoose = require('mongoose')
// Connect to MongoDB
const connectDB = (uri) => {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`connected`)
    })
    .catch((err) => {
      console.log(err)
    })
}
module.exports = connectDB