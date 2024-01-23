import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';


function Barchart (props){
    return (
        <>
        {console.log(props.chartData)}
        <Bar data={props.chartData}></Bar>
        </>
        

    )
}

export default Barchart;