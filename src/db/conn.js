const mongoose = require('mongoose')

async function main() {

  try {
    mongoose.set('strictQuery', true)

    await mongoose.connect(
      'mongodb+srv://lucasrbordignon:xk2zyrkMO7QcY42V@user-crud.assez7n.mongodb.net/?retryWrites=true&w=majority'
    )

    console.log('Conectado ao banco!')
  } catch (error) {
    console.log({erro: error})
  }

}

module.exports = main