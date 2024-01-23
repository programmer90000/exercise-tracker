import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import ItemList from './components/Statistic/TrackStatistics/TrackStats.jsx';
import Charts from './components/Chart/Chart.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ItemList></ItemList>
    <Charts></Charts>
    <App />
  </React.StrictMode>,
)
