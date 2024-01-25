import React from "react";
import './navbar.module.css'


function NavTabs(props) {
    return (
      <div className="navBar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => props.handlePageChange('home')}
            className={
              props.currentPage === 'home' ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => props.handlePageChange('about')}
            className={
              props.currentPage === 'about' ? 'nav-link active' : 'nav-link'
            }
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#newWorkout"
            onClick={() => props.handlePageChange('newWorkout')}
            className={
              props.currentPage === 'newWorkout' ? 'nav-link active' : 'nav-link'
            }
          >
            New Workout
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#statistics"
            onClick={() => props.handlePageChange('statistics')}
            className={
              props.currentPage === 'statistics' ? 'nav-link active' : 'nav-link'
            }
          >
            Statistics
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#nearestGym"
            onClick={() => props.handlePageChange('nearestGym')}
            className={
              props.currentPage === 'nearestGym' ? 'nav-link active' : 'nav-link'
            }
          >
            Nearest Gym
          </a>
        </li>
      </ul>
      </div>
    );
  }
  
  export default NavTabs;