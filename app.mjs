import express from 'express';

const app = express();
const PORT = 3000;
// configure view engine and middleware before routes (AI ASSISTED)
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// home route: render once and pass both title and name (AI ASSISTED)
app.get('/', (req, res) => {
  const userName = 'Jonathan Havard'; // replace with dynamic user source as needed
  res.render('main', { title: 'Portfolio Template', name: userName });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;