const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  studioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Studio',
    required: true
  },
  released: {
    type: Number,
    required: true
  },
  cast: [{
    role: {
      type: String
    },
    actorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Actor',
      required: true
    }
  }]
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    }
  }
});

schema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'review'
});




module.exports = mongoose.model('Film', schema);

//
