import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


function LineChart (props){
    return(
        <Line data={props.chartData} ></Line>
    )
};

export default LineChart;