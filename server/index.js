const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(`${__dirname}/../client/dist`));
app.set('views', __dirname + '/../client/dist/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.render('index.html');
})

if(process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/../client/dist`));

  app.get('*', (req, res) => {
    res.render('index.html')
  })
}
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
