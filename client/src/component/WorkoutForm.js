import React, { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const { dispatch }=useWorkoutsContext()

    const [title, setTitle]=useState('')
    const [load, setLoad]=useState('')
    const [reps, setReps]=useState('')
    const [error, setError]=useState(null)
    const [emptyFields,setEmptyFields]=useState([])

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const workout={title, load, reps}
        const response=await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()
        if(!response.ok){
            setError(json.error)
            // Handling Error Responses
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('New workout added',json)
            dispatch({type: 'CREAT_WORKOUT', payload: json})
        }
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        
        <label>Exersize Title:</label>
        <input
        type='texte'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        className={emptyFields.includes('title') ? 'error': ''}
        />

       <label>Load (in kg): </label>
        <input
        type='number'
        value={load}
        onChange={(e)=>setLoad(e.target.value)}
        className={emptyFields.includes('load') ? 'error': ''}
        />

        <label>Load (in kg): </label>
        <input
        type='number'
        value={reps}
        onChange={(e)=>setReps(e.target.value)}
        className={emptyFields.includes('reps') ? 'error': ''}
        />

        {/* Validation of the form after filling */}
        <button>Add Workout</button>

        {/* Show if there are errors */}
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm
