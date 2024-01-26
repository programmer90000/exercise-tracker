import React from "react";
import './about.css';





function AboutSection() {
  return (
    <section id="about">
      <div className="about-content">
        <h1>About Our Fitness Tracker</h1>
        <p>
          Welcome to {"Fitness"}, your personal fitness companion! We're here to help you reach your fitness goals, track your progress, and stay motivated along the way.
        </p>
        <p>
          Here's how it works:
          <ul class='list'>
            <li>Create a free account and set your fitness goals.</li>
            <li>Record your workouts, including activities, duration, and intensity.</li>
            <li>Track your progress over time with detailed charts and statistics.</li>
            <li>Get personalized insights and recommendations to help you stay on track.</li>
            <li>Connect with other users for support and motivation.</li>
          </ul>
        </p>



        <iframe width="560" height="315" src="https://www.youtube.com/embed/_JRefJH6N00?si=PaXXMvzp7g_vy0VI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
     
        <p>
          Ready to start your fitness journey? Sign up today and let's get moving!
        </p>
        <button className="cta">Sign Up Now</button>
      </div>
    </section>
  );
}

export default AboutSection;