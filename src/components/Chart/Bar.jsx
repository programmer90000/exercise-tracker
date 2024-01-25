import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import "./Chart.module.css"


function Barchart (props){
    return (
        <>
        {console.log(props.chartData)}
        <Bar data={props.chartData}></Bar>
        </>
        

    )
}

export default Barchart;