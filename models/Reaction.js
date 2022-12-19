const { Schema } = require('mongoose')

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        // For some reason this reactionId was not showing up.
        // Instead _id does!
        // default: () => new ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        max_length: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true,
        get: v => format(v, 'dd LLL yyyy')
    },
  }
)

module.exports = reactionSchema