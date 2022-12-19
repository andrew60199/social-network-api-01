const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true,
    },
    thoughts: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought'
        },
      ],
    },      
    // friends: [userSchema]
    // Didn't like the one above
    friends: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user'
        },
      ],
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
)

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length
  })

const User = model('user', userSchema)

module.exports = User
