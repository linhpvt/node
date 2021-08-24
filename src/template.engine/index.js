const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// use template engine ejs
// ejs: the name of template engine and also the extension of template files
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  // viewName is the template filename.
  const viewName = 'index';
  res.render(viewName, { user: 'John', ID: Date.now() });
});

app.listen(PORT, () => console.log(`Sever started at: ${PORT}`));
