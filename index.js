const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage()});
require('dotenv').config()

const app = express();

app.use(cors());

// serving static file
app.use('/public', express.static(process.cwd() + '/public'));

// basic routing
app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;

// listen the port
app.listen(port, () => {
  console.log('Your app is listening on port ' + port)
});

// file analyser
app.post('/api/fileanalyse', upload.single('upfile'), (req, res, next) => {
  let output: {
    name: req.file.originalname, 
    type: req.file.mimetype, 
    size: req.file.size
  };
  res.json(output);
});