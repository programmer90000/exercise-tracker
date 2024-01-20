import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function NewWorkout() {
    const { register, handleSubmit, watch, reset } = useForm();
    const [ exercises, setExercises ] = useState([]);

    return (
        <div></div>
    );
};

export default NewWorkout;