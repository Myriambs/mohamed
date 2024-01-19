import React from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
// npm date-fins
// Indicate the days or dates of posts like on Youtube or Facebook...3 h ago
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({workout}) => {
  
  const { dispatch }=useWorkoutsContext()
  console.log('workout.createAt:', workout.createAt);
  const handleClick=async()=>{
    const response=await fetch('/api/workouts' + workout._id,{
      method: 'DELETE'
    })
    const json=await response.json()
    if(response.ok){
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  const formattedDate = workout.createAt? formatDistanceToNow(new Date(workout.createAt), { addSuffix: true }): 'Unknown Date';
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps (kg): </strong>{workout.reps}</p>

        <p>{formattedDate}</p>
        <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails
