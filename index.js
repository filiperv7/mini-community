const connection = (async () => {
  const database = require('./config/db')
  const sequelize = require('sequelize')
  const Author = require('./models/author')
  const Post = require('./models/post')

  try {
    const result = await database.sync()
    console.log(result)
  } catch (error) {
    console.log(error)
  }
})()

// const createAuthor = await Author.create({
//   name: 'Zoe Lilly',
//   followers: 12346
// })

// const authors = await Author.findAll()
// console.log(authors)
