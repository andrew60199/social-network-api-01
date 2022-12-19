const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')
const format = require('date-fns/format')

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        unique: true,
        max_length: 280
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        immutable: true,
        get: v => format(v, 'dd LLL yyyy')
    },
    username: {
      type: String,
      required: true
    },
    reactions: {
      type: [reactionSchema]
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
)

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return this.reactions.length
  })

const Thought = model('thought', thoughtSchema)

module.exports = Thought
