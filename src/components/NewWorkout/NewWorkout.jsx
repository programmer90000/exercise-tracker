import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './NewWorkout.css';

function NewWorkout() {
    const { register, handleSubmit, watch, reset } = useForm();
    const [ exercises, setExercises ] = useState([]);
    const [ date ] = useState(new Date());

    const currentDate = date.toLocaleDateString(); // Get current date

    const onSubmit = (data) => {
        setExercises([...exercises, data]);
        reset();
    }; // Run this function when the submit button is pressed

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
            <p>Welcome to our exercise log! This is where you can record all the exercises you do, keep track of your progress, and stay motivated. Whether you’re a beginner or an experienced athlete, this log will help you achieve your fitness goals.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="question">
                    <label htmlFor="exerciseName">Exercise Name:</label>
                    <input type="text" id="exerciseName" placeholder="Name" {...register('exerciseName', { required: true })} />
                    {watch('exerciseName') && <p>Exercise Name is required</p>}
                </div>
                <div className="question">
                    <label htmlFor="numberOfReps">Number of Reps:</label>
                    <input type="number" id="numberOfReps" placeholder="Reps" {...register('numberOfReps', { required: true, min: 1 })} />
                    {watch('numberOfReps') && <p>Number of Reps must be greater than 0</p>}
                </div>
                <div className="question">
                    <label htmlFor="weightUsed">Weight Used:</label>
                    <input type="number" id="weightUsed" placeholder="Weights" {...register('weightUsed', { required: true, min: 1 })} />
                    {watch('weightUsed') && <p>Weight Used must be greater than 0</p>}
                </div>
                    <button type="submit">Add Exercise</button>
                    <button type="button" onClick={downloadJson} disabled={exercises.length === 0}>Download JSON</button>
            </form>
            <h5>Tips to help you track exercise</h5>
            <ul>
                <li>Be consistent: Try to record your exercises every day or every time you work out.</li>
                <li>Be specific: Use the exercise name, date, duration, and calories burned fields to provide as much detail as possible.</li>
                <li>Be honest: Don’t cheat yourself by recording false information. The only person you’re hurting is yourself.</li>
                <li>Be motivated: Use your exercise log to track your progress and set new goals for yourself. Celebrate your achievements and keep pushing yourself to do better.</li>
            </ul>
        </div>
    );
};

export default NewWorkout;