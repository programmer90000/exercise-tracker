import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './NewWorkout.css';

function NewWorkout() {
    const { register, handleSubmit, watch, reset } = useForm();
    const [ exercises, setExercises ] = useState([]);
    const [ date ] = useState(new Date());
    const [ data, setData ] = useState([]);
    const [ value, setValue ] = useState('');
    const [ filteredData, setFilteredData ] = useState([]);

    useEffect(() => {
        fetch("https://work-out-api1.p.rapidapi.com/search", {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5dccbbf10bmsh6cc302400b47465p17aa40jsn50acacd5d920',
                'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
            }
        }) .then (response => response.json())
            .then (data => {
                setData(data);
            });
    }, []);
  
    const currentDate = date.toLocaleDateString(); // Get current date

    const onSubmit = (data) => {
        const exercisesJsonData = { date: currentDate, ...data };
        setExercises([...exercises, exercisesJsonData]);
        reset();
    }; // Run this function when the submit button is pressed

    const downloadJson = () => {
        const dataStr = JSON.stringify({...exercises});
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr); // Create a data URI for the JSON string
        const exportFileDefaultName = 'workout.json';
    
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click(); // Click the link to download the file
      };

    const uploadJson = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const jsonData = JSON.parse(event.target.result);
            const exercises = jsonData.filter((item) =>
                Object.keys(item).every((key) =>
                    ["workout_type", "sets", "repetitions", "weight"].includes(key)
                )
            );
            console.log(exercises);
        };
        reader.readAsText(file);
    }

    const onChange = (event) => {
        setValue(event.target.value);
        const searchTerm = event.target.value.toLowerCase();
        const filteredData = data.filter(item => {
            return item.WorkOut.toLowerCase().includes(searchTerm) && item.WorkOut !== searchTerm;
        }).slice(0, 10);
        setFilteredData(filteredData);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    }; // If the input is changed

    return (
        <div id="record-workout">
            <h4>Record a workout</h4>
            <p>Welcome to our exercise log! This is where you can record all the exercises you do, keep track of your progress, and stay motivated. Whether you’re a beginner or an experienced athlete, this log will help you achieve your fitness goals.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="question">
                    <label htmlFor="workout_type">Exercise Name:</label>
                    <input type="text" autoComplete="on" id="workout_type" placeholder="Name" {...register('workout_type', { required: true })} value={value} onChange={onChange}  />
                    <div className="dropdown">
                        {value ? filteredData.map((item) => <div onClick={() => onSearch(item.WorkOut)} className="dropdown-row" key={item.WorkOut}>{item.WorkOut}</div>) : null}
                    </div>
                    {watch('workout_type') && <p>Exercise Name is required</p>}
                </div>
                <div className="question">
                    <label htmlFor="sets">Number of Sets:</label>
                    <input type="number" id="sets" placeholder="Sets" {...register('sets', { required: true })} />
                    {watch('sets') && watch('sets') < 1 && <p>Number of Sets must be greater than 0</p>}
                </div>
                <div className="question">
                    <label htmlFor="repetitions">Number of Reps:</label>
                    <input type="number" id="repetitions" placeholder="Reps" {...register('repetitions', { required: true })} />
                    {watch('repetitions') && watch('repetitions') < 1 && <p>Number of Reps must be greater than 0</p>}
                </div>
                <div className="question">
                    <label htmlFor="weight">Weight Used:</label>
                    <input type="number" id="weight" placeholder="Weights" {...register('weight', { required: true })} />
                    {watch('weight') && watch('weight') < 1 && <p>Weight Used must be greater than 0</p>}
                </div>
                    <button type="submit">Add Exercise</button>
                    <button type="button" onClick={downloadJson} disabled={exercises.length === 0}>Download JSON</button>
                    <input type="file" onClick={uploadJson}></input>
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