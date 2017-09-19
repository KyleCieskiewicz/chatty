const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

let messages = ['hi', 'bye', 'hello world'];

app.get('/messages', function(req, res, next){
    res.status(200).json({messages: messages});
});

app.post('/messages', function (req, res, next) {
    messages.push({ message: req.body.message, time: new Date() });
    res.status(200).json({ messages: messages });
  });

  app.listen(3000, () => {
	console.log('running on port 3000');
})
