const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const contactSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
      maxlength: 500
    },
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);



module.exports = contactSchema;