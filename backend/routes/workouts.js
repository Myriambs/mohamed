const express=require('express')
const router=express.Router()
const{getWorkouts,getWorkout,createworkout,updateWorkout,deleteWorkout}=require('../controllers/workoutController')

// GET all workouts
router.get('/',getWorkouts)

// GET a single workout
router.get('/:id',getWorkout)

// POST a new workout
router.post('/',createworkout)

// Update a workout
router.put('/:id',updateWorkout)

// DELETE a workout
router.delete('/:id',deleteWorkout)


module.exports=router