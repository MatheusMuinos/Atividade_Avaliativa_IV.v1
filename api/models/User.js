import moongoose from 'mongoose';

const UserSchema = new moongoose.Schema({    
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const User = moongoose.model('User', UserSchema);
export default User;

