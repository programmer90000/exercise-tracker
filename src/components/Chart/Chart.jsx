import { userData } from "../Statistic/userStats";
import Barchart from "./Bar";
import LineChart from "./Line";
import 'chart.js/auto';
import "./Chart.css"

const data = {
    labels:userData.map((data)=>data["Work Out"]),
    datasets:[{
        label:"Reps",
        backgroundColor:"grey",
        data:userData.map((data)=>data.Reps)
    }]
}

const data2 =  {
    labels:userData.map((data)=>data["Work Out"]),
    datasets:[{
        label:"Sets",
        backgroundColor:"grey",
        borderColor:"grey",
        data:userData.map((data)=>data.Sets)
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

