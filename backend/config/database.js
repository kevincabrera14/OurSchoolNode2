const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://kevincabrera1234:p4zAYducJahbzqjF@kevincabrera.nvcvv2r.mongodb.net/cluster0?retryWrites=true&w=majority`
mongoose.connect(URI);

module.exports = mongoose;