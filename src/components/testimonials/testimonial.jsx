
import React from 'react';
import TestimonialCard from 'material-testimonial-card';
import '../testimonials/testimonial.css'

const Component = () => {
	return <div className='test' >
        <div className='card1'>
        <TestimonialCard
		name={"Mc Jung"}
		image={"src/assets/MCJUNG.png"}
		content={"I started using this website after feeling envious of the hot guys from Mexico, and I highly recommend it."}
		project={"User"}
	/>
    </div>
    <div className='card2'>
    <TestimonialCard 
		name={"Robert"}
		image={"src/assets/profile-icon.avif"}
		content={"Great Website!!!"}
		project={"User"}
	/>
    </div>
    <div className='card3'>
    <TestimonialCard 
		name={"Havier"}
		image={"src/assets/profile-icon2.jpg"}
		content={"Very useful!"}
		project={"User"}
	/></div>
    </div>
}

export default Component;