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
        <div></div>
    );
};

export default NewWorkout;