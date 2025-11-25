import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
// configure view engine and middleware before routes (AI )
app.set('view engine', 'ejs');
app.set('views', 'views');

// derive __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static directories
app.use(express.static(path.join(__dirname, 'public')));
app.use('/QuickAccess', express.static(path.join(__dirname, 'QuickAccess')));
app.use('/Publications', express.static(path.join(__dirname, 'Publications')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// home route: render once and pass both title and name (AI ASSISTED)
// Site-wide content (change to fetch from DB or config as needed)
const about = 'write bio here'; // placeholder for about section
app.locals.about = about; // available in all views via 'about'
const eMail = 'email here'; // placeholder for email
app.locals.eMail = eMail; // available in all views via 'eMail'
const phoneNumber = 'phone number here'; // placeholder for phone number
app.locals.phoneNumber = phoneNumber; // available in all views via 'phoneNumber'
const socialMedia1 = 'Social Media 1 Title here'; // placeholder for Title
app.locals.socialMedia1 = socialMedia1; // available in all views via 'socialMedia1'
const socialMedia2 = 'Social Media 2 Title here'; // placeholder for Title
app.locals.socialMedia2 = socialMedia2; // available in all views via 'socialMedia2'
const socialMedia3 = 'Social Media 3 Title here'; // placeholder for Title
app.locals.socialMedia3 = socialMedia3; // available in all views via 'socialMedia3'
const socialMedia1URL = 'Social Media 1 URL here'; // placeholder for URL
app.locals.socialMedia1URL = socialMedia1URL; // available in all views via 'socialMedia1URL'
const socialMedia2URL = 'Social Media 2 URL here'; // placeholder for URL
app.locals.socialMedia2URL = socialMedia2URL; // available in all views via 'socialMedia2URL'
const socialMedia3URL = 'Social Media 3 URL here'; // placeholder for URL
app.locals.socialMedia3URL = socialMedia3URL; // available in all views via 'socialMedia3URL'

app.get('/', (req, res) => {
  const userName = 'Name'; // replace with dynamic user source as needed
  res.render('main', { title: 'Portfolio Template', name: userName, about });
});

// Render QuickAccess EJS pages so links in main.ejs work
// Render QuickAccess EJS pages and support legacy `.html` URLs by redirecting
app.get('/QuickAccess/Contact.ejs', (req, res) => {
  res.render('QuickAccess/Contact', { title: 'Contact', eMail, phoneNumber  });
});
app.get('/QuickAccess/Contact.html', (req, res) => res.redirect(301, '/QuickAccess/Contact.ejs'));

app.get('/QuickAccess/Portfolio.ejs', (req, res) => {
  res.render('QuickAccess/Portfolio', { title: 'Portfolio',});
});
app.get('/QuickAccess/Portfolio.html', (req, res) => res.redirect(301, '/QuickAccess/Portfolio.ejs'));

app.get('/QuickAccess/SocialMedia.ejs', (req, res) => {
  res.render('QuickAccess/SocialMedia', { title: 'Social Media', socialMedia1, socialMedia2, socialMedia3  });
});
app.get('/QuickAccess/SocialMedia.html', (req, res) => res.redirect(301, '/QuickAccess/SocialMedia.ejs'));

app.get('/QuickAccess/About.ejs', (req, res) => {
  res.render('QuickAccess/About', { title: 'About', about });
});
app.get('/QuickAccess/About.html', (req, res) => res.redirect(301, '/QuickAccess/About.ejs'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;