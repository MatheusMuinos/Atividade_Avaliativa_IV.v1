import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const registerUser = async ({ username, email, password }) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!username || !email || !password) throw new Error("Username, email, and password are required");
    if (!emailRegex.test(email)) throw new Error("Invalid email format");
    if (!passwordRegex.test(password)) throw new Error("Weak password");

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) throw new Error("Username or email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return await User.create({ username, email, password: hashedPassword });
};

export const loginUser = async ({ username, email, password }) => {
    if (!password || (!username && !email)) throw new Error("Username/email and password required");

    const user = await User.findOne({ $or: [{ username }, { email }] }).select('+password');
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { message: 'Login successful', token };
};

export const getAllUsers = async () => {
    return await User.find({}, { password: 0 });
};
