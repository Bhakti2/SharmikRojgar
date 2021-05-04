const mongoose = require('mongoose');
const mySecret = process.env['DB_PASS']


const getConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://jimmy:${mySecret}@cluster0.tpjk1.mongodb.net/shramikRogar?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        userUnifiedTopology: true
      }
    );
    console.log("Successfully Connected to the database");
  } catch(error) {
    console.log("error while Connectin to the database")
  }
}

exports.getConnection = getConnection;