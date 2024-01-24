const mongoose = require('mongoose');
const colors = require('colors')

// const url = 'mongodb+srv://Rathil:cJe6U7k0m1qfR6AW@cluster0.fibw1dl.mongodb.net/ecommerce';


const connectToMongo = (url)=>{
    mongoose.connect(url);
    
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(colors.blue('Database connected...'));
}).on('error',(err) => {
    console.log(colors.red('Connection failed...'));
    process.exit(1)
});

}
module.exports = connectToMongo