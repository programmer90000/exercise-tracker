import { userData } from "../Statistic/userStats";
import Barchart from "./Bar";
import 'chart.js/auto';

// function getChartData(data){
//     <Barchart
//     date={data.date}
//     workout_type={data.workout_type}
//     repetitions={data.repetition}
//     sets={data.sets}
//     ></Barchart>
// }


function Charts (){
    const data = {
        labels:userData.map((data)=>data.date),
        datasets:[{
            data:userData.map((data)=>data.repetitions)
        }]
    }
    return(
        <div>
            <Barchart chartData={data}


            ></Barchart>
        </div>
    )
};

export default Charts; 