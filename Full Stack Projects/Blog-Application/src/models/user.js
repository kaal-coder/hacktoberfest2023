const { Schema, model } = require('mongoose');
const { createHmac, randomBytes } = require('crypto');
const { createTokenForUser } = require('../services/authentication');

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: '/images/default.png', 
    },
    role: {
      type: String,
      emun: ['ADMIN', 'USER'],
      default: 'USER',
    },
  },
  { timestamps: true }
); 

userSchema.pre('save', function (next) {
  // Perform some logic or modifications before saving the document
  const user = this; // this refers to the document being saved
  if (!user.isModified('password')) return;  

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac('sha256', salt)
    .update(user.password) // .update takes the data to be hashed
    .digest('hex');

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

userSchema.static('matchPasswordAndGenerateToken', async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) throw new Error('User not found');

  const salt = user.salt;
  const hashedPassword = user.password;

  const userProvidedHash = createHmac('sha256', salt)
    .update(password)
    .digest('hex');

  if (hashedPassword !== userProvidedHash)
    throw new Error('Password is incorrect');

  const token = createTokenForUser(user); // passing user object to create token
  return token;
  // return user;
  // return { ...user, password: undefined, salt: undefined };
});

const USER = model('user', userSchema);
module.exports = USER;
