const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8050;

const itemRoutes = require('./routes/api');
const keys = require('./config/keys')


mongoose.connect(keys.MONGODB_URI , {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});
mongoose.connection.on('connected', () => {
	console.log('MongoDB is connected!!!');
});


app.use(express.json())
app.use(express.urlencoded({extended:false}))


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', itemRoutes);


// Step 3
if(process.env.NODE_ENV ==='production'){
	app.use(express.static('client/build'))
	app.get('*',(req,res) => {
		res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
	})
}


app.listen(PORT, () => console.log(`Server starting at: ${PORT}`));