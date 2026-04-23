import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

let personalItems = [];
let workItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Helper function
const getFormattedDate = () => {
  const today = new Date();
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return today.toLocaleDateString('en-US', options);
};

// Routes
app.get('/', (req, res) => {
  res.render('list', {
    listTitle: getFormattedDate(),
    items: personalItems,
    placeholder: 'Add a new task...',
    route: '/'
  });
});

app.post('/', (req, res) => {
  const item = req.body.item?.trim();
  if (item) personalItems.push(item);
  res.redirect('/');
});

app.get('/work', (req, res) => {
  res.render('list', {
    listTitle: '💼 Work List',
    items: workItems,
    placeholder: 'Add a new work task...',
    route: '/work'
  });
});

app.post('/work', (req, res) => {
  const item = req.body.item?.trim();
  if (item) workItems.push(item);
  res.redirect('/work');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
