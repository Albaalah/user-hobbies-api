const express = require('express');
const app = express();
const cors = require('cors');
const indexRouter = require('./routes/index');
const hobbiesRouter = require('./routes/hobbies');
const userRouter = require('./routes/users');

app.use(cors());
app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/hobbies', hobbiesRouter);

app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
});
