import userStats from "../userStats";
import Figures from "../StatsFigure";
import "../TrackStatistics/TrackStats.css";

function ItemList (){
    return (
        <>
            <header><strong>Statistics</strong></header>
            <section>
                <div className="stats-list">
                    <div>Total Number of WorkOut</div> 
                    <Figures figure={userStats.totalNumberOfWorkOut}/>
                </div>
                <div className="stats-list">
                    <div>Total Number of Exercises</div> 
                    <Figures figure={userStats.totalNumberOfExercise}/>
                </div>
                <div className="stats-list">
                    <div>Average Exercise Per WorkOut</div> 
                    <Figures figure={userStats.avgNumberOfExercise}/>
                </div>
                <div className="stats-list">
                    <div>Average WorkOut Per Week</div> 
                    <Figures figure={userStats.avgNumberOfWorkOutPerWeek}/>
                </div>
                
            </section>
        </>
    )
};

export default ItemList;

