import React, { useEffect } from 'react'
import WorkoutDetails from '../component/WorkoutDetails'
import WorkoutForm from '../component/WorkoutForm'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const Home = () => {
  // workouts is located in the useReducer
  const {workouts, dispatch}=useWorkoutsContext()

  useEffect(()=>{
    const fetchWorkouts=async ()=>{
      const response=await fetch('/api/workouts')
      const json=await response.json()

      if(response.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    fetchWorkouts()
  },[dispatch])
  let wo = workouts.msg
console.log(wo)
  return (
    <div className='home'>
      
      {/* Display the list of workouts in the database */}
      <div className="workouts">
        
        {wo && wo.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>

      {/* Add a new workout page */}
      <WorkoutForm/>
    </div>
  )
}

export default Home
