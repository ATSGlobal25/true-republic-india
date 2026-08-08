require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const kycRoutes = require('./routes/kyc');
const contentRoutes = require('./routes/content');

const app = express();
const PORT = process.env.PORT || 4000;

app.disable('x-powered-by');
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Public website.
app.use(express.static(path.join(__dirname, '..', 'public')));

// Only member-published content media is public. KYC documents are deliberately
// NOT exposed as a static directory; they are available only through the
// password-protected admin review endpoint.
app.use('/uploads/content', express.static(path.join(__dirname, 'uploads', 'content')));

app.get('/health', (_req, res) => res.json({ ok: true, service: 'true-republic-india' }));

app.use('/api/auth', authRoutes);
app.use('/api/kyc', kycRoutes);
app.use('/api/content', contentRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(400).json({ error: err.message || 'Request failed.' });
});

app.listen(PORT, () => {
  console.log(`True Republic India server running on port ${PORT}`);
  if (!process.env.SMS_PROVIDER) {
    console.log('No SMS_PROVIDER configured — OTPs run in development mode.');
  }
});
