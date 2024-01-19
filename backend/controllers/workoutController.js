const workoutSchema=require('../model/workout')

// GET all workouts
exports.getWorkouts=async(req,res)=>{
    try {
        const workouts=await workoutSchema.find()
        res.status(200).json({msg:workouts})
    } catch (error) {
        console.log(error)
    }
}

// GET a single workout
exports.getWorkout=async(req,res)=>{
    try {
        const {id}=req.params

        const workout=await workoutSchema.findById(id)

        res.status(200).json({msg:workout})
    } catch (error) {
        console.log(error)
    }
}

// POST a new workout
exports.createworkout=async(req,res)=>{
    const {title,reps,load}=req.body
    // Handling Error Responses
    let emptyFields=[]
    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error: 'Please fill in all the fields',emptyFields})
    }

    // add document to database
    try {
        const createdd= new workoutSchema(req.body)
        await createdd.save()
        res.status(200).json({msg:createdd})
    } catch (error) {
        console.log(error)
    }
}

// Update a workout
exports.updateWorkout=async(req,res)=>{
    try {
        const {id}=req.params
        const upadated=await workoutSchema.findByIdAndUpdate(id,{$set:{...req.body}})

        if (!upadated) {
            return res.status(404).json({ error: 'Document not found' });
        }

        res.status(200).json({msg:'Yes successfull',upadated})
    } catch (error) {
        console.log(error)
    }
}

// DELETE a workout
exports.deleteWorkout=async(req,res)=>{
    try {
        const {id}=req.params
        const remove=await workoutSchema.findByIdAndDelete(id)
        res.status(200).json({msg:remove})
    } catch (error) {
        console.log(error)
    }
}