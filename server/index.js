const { app } = require('./app.js');
const PORT = 3000;

app.listen(PORT, () => {
  console.info(`Connected to http://127.0.0.1:${PORT}`);
});
