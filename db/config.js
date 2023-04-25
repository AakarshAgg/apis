//const mongoose=require("mongoose")
//mongoose.connect("mongodb://localhost:27017/assignment")

const mongoose = require('mongoose')

const url = 'mongodb+srv://aakarshaggarwal7:LaNJZzHvSBJEoI6V@cluster0.otk7oxc.mongodb.net/assignment?retryWrites=true&w=majority';

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })