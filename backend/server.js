const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();
const allowedOrigins = [
	process.env.FRONTEND_URL,
	'http://localhost:5173',
	'http://127.0.0.1:5173',
].filter(Boolean);

app.use(cors({
	origin: (origin, callback) => {
		if (!process.env.FRONTEND_URL || !origin || allowedOrigins.includes(origin)) {
			return callback(null, true);
		}
		return callback(new Error('Origin is not allowed by CORS'));
	},
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
