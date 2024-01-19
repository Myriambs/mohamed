const mongoose=require('mongoose')

const conectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://kamikaze:VhNa8mIb3cO0Jj8e@cluster0.yyu5ygj.mongodb.net/?retryWrites=true&w=majority')
        console.log('Successfull')
    } catch (error) {
        console.log(error)
    }
}

module.exports=conectDB