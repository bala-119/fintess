import React from 'react';

const Explore = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Explore Our Services</h1>
            <p className="text-center">Discover the variety of fitness programs we offer to help you achieve your goals.</p>
            
            <div className="text-center mt-4">
                <h3>Personalized Coaching</h3>
                <p>Get a custom plan tailored to your fitness level and goals.</p>
            </div>

            <div className="text-center mt-4">
                <h3>Group Classes</h3>
                <p>Join a community of fitness enthusiasts for group workouts.</p>
            </div>

            <div className="text-center mt-4">
                <h3>Nutrition Plans</h3>
                <p>Receive diet plans to fuel your workouts and help you stay on track.</p>
            </div>

            {/* Note about the placeholder images and content */}
            <div className="text-center mt-4">
                <p><strong>Note:</strong> All the content and images here are placeholders and sourced from the internet. They will be updated with actual images and content once finalized.</p>
            </div>
        </div>
    );
};

export default Explore;
