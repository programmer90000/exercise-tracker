import { userData } from "../Statistic/userStats";
import Barchart from "./Bar";
import LineChart from "./Line";
import 'chart.js/auto';
import "./Chart.css"

const data = {
    labels:userData.map((data)=>data.workout_type),
    datasets:[{
        label:"Daily Reps",
        data:userData.map((data)=>data.repetitions)
    }]
}

const data2 =  {
    labels:userData.map((data)=>data.date),
    datasets:[{
        label:"Daily Reps",
        data:userData.map((data)=>data.sets)
    }]
}



function Charts (){
 
    return(
        <div className="chart">
            <div className="bar-chart">
            <Barchart chartData={data}></Barchart>
            </div>
            <div className="line-chart">
            <LineChart chartData={data2} ></LineChart>
            </div>
        </div>
    )
};

export default Charts; 

