const mongoose = require('mongoose')
const dbname = ''

mongoose.connect(`mongodb+srv://dhruv:dhruv@cluster0.lnfajgp.mongodb.net/${dbname}?retryWrites=true&w=majority`)
    .then(() => console.log('db connected'))