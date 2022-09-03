let express = require('express');
let cors = require('cors');
require('dotenv').config()

let app = express();

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