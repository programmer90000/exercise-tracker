import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function NewWorkout() {
    const { register, handleSubmit, watch, reset } = useForm();
    const [ exercises, setExercises ] = useState([]);

    const onSubmit = (data) => {
        setExercises([...exercises, data]);
        reset();
    };

    const downloadJson = () => {
        const dataStr = JSON.stringify(exercises);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr); // Create a data URI for the JSON string
        const exportFileDefaultName = 'workout.json';
    
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click(); // Click the link to download the file
      };

    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="exerciseName">Exercise Name:</label>
          <input type="text" id="exerciseName" {...register('exerciseName', { required: true })} />
          {watch('exerciseName') && <p>Exercise Name is required</p>}
  
          <label htmlFor="numberOfReps">Number of Reps:</label>
          <input type="number" id="numberOfReps" {...register('numberOfReps', { required: true, min: 1 })} />
          {watch('numberOfReps') && <p>Number of Reps must be greater than 0</p>}
  
          <label htmlFor="weightUsed">Weight Used:</label>
          <input type="number" id="weightUsed" {...register('weightUsed', { required: true, min: 1 })} />
          {watch('weightUsed') && <p>Weight Used must be greater than 0</p>}
  
          <button type="submit">Add Exercise</button>
          <button type="button" onClick={downloadJson} disabled={exercises.length === 0}>
            Download JSON
          </button>
        </form>
      </div>
    );
};

export default NewWorkout;