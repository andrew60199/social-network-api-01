const User = require('./User')
const Thought = require('./Thought')

// const run = async () => {
//     try {
        
//         const user = await new User.create({
//             username: 'Andrew',
//             email: 'andrew@email.com'
//         })

//         console.log(user)


//     } catch (e) {
//         console.log(e)
//     }
// }

// run()

module.exports = { User, Thought }
