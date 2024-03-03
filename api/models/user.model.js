import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default:'https://imgs.search.brave.com/nHATbM8ccf609-GFp4Dkm-DMyiibNS1gqZH2y6C8VhQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bmljZXBuZy5jb20v/cG5nL2RldGFpbC85/MzMtOTMzMjEzMV9w/cm9maWxlLXBpY3R1/cmUtZGVmYXVsdC1w/bmcucG5n',
    },
},
{timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;