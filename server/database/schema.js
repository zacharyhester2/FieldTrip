const mongoose = require('mongoose');
const resourceSchema = mongoose.Schema({
  id: Number,
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: String,
  director: String,
  author: String,
  narrator: String,
  image: String,
  url: String,
  type: String
});

const Resources = mongoose.model('Resources', resourceSchema);

const badgeSchema = mongoose.Schema({
  id: String,
  name: String,
  description: String,
  type: String,
  url: String,
  image: String,
});

const Badges = mongoose.model('Badge', badgeSchema);

const userSchema = mongoose.Schema({
  id: String,
  name: String,
  cloudinaryId: String,
  interests: String,
  stamps: Array,
  badges: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Badges,
  },
  challenges: Array,
  // saved: Array,
  saved: Array,
});


const Users = mongoose.model('User', userSchema);

module.exports = {
  Users,
  Resources,
  Badges,
}