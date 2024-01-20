import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './NewWorkout.css';

function NewWorkout() {
    const { register, handleSubmit, watch, reset } = useForm();
    const [ exercises, setExercises ] = useState([]);
    const [ date ] = useState(new Date());

    const currentDate = date.toLocaleDateString();

    const onSubmit = (data) => {
        setExercises([...exercises, data]);
        reset();
    };

    const downloadJson = () => {
        exercises.unshift(currentDate);
        const dataStr = JSON.stringify(exercises);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr); // Create a data URI for the JSON string
        const exportFileDefaultName = 'workout.json';
    
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click(); // Click the link to download the file
      };

    return (
        <div id="record-workout">
            <h4>Record a workout</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="question">
                    <label htmlFor="exerciseName">Exercise Name:</label>
                    <input type="text" id="exerciseName" {...register('exerciseName', { required: true })} />
                    {watch('exerciseName') && <p>Exercise Name is required</p>}
                </div>
                <div className="question">
                    <label htmlFor="numberOfReps">Number of Reps:</label>
                    <input type="number" id="numberOfReps" {...register('numberOfReps', { required: true, min: 1 })} />
                    {watch('numberOfReps') && <p>Number of Reps must be greater than 0</p>}
                </div>
                <div className="question">
                    <label htmlFor="weightUsed">Weight Used:</label>
                    <input type="number" id="weightUsed" {...register('weightUsed', { required: true, min: 1 })} />
                    {watch('weightUsed') && <p>Weight Used must be greater than 0</p>}
                </div>
                    <button type="submit">Add Exercise</button>
                    <button type="button" onClick={downloadJson} disabled={exercises.length === 0}>Download JSON</button>
            </form>
        </div>
    );
};

export default NewWorkout;