

const mongoose = require('mongoose');


const connectDB = async (mongoURI)=>{
  try{
    const conn = await mongoose.connect(mongoURI);
    if(conn) console.log("Connection Successful")
    console.log(conn)
    return conn;
  } catch(err) {
    console.log(err.message);
    process.exit(1);
  }
}



// let _db;
// const mongoConnect = (callback) => {
//   MongoClient.connect(
//     "mongodb+srv://harshald:harshald@cluster0.1zwtfi8.mongodb.net/?retryWrites=true&w=majority"
//   )
//     .then(client => {
//       console.log("Connected Successfully");
//       _db = client.db();
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };
// const getDb = () => {
//     if(_db) return _db;
//     throw 'No database found';
// }
// exports.mongoConnect = mongoConnect ;
module.exports = connectDB;