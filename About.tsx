import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400">About PneumoScan</h1>
        <p className="mt-4 text-lg text-gray-300">
          PneumoScan is an AI-powered tool designed to assist in the early detection of pneumonia using chest X-ray images. 
          Our mission is to leverage deep learning to provide fast and reliable analysis, aiding healthcare professionals 
          in diagnosing pneumonia more efficiently.
        </p>
      </div>

      {/* Section: About Pneumonia */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-300">What is Pneumonia?</h2>
        <p className="mt-3 text-gray-300">
          Pneumonia is a lung infection that causes inflammation in the air sacs, leading to difficulty in breathing, 
          fever, and fatigue. It can be caused by bacteria, viruses, or fungi, and early diagnosis is crucial for effective treatment.
        </p>
      </div>

      {/* Section: Project Details */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-300">Our Approach</h2>
        <p className="mt-3 text-gray-300">
          We utilize a deep learning model trained on chest X-ray images to detect signs of pneumonia with high accuracy. 
          Our model processes the uploaded X-rays and provides a predictive result, helping users make informed decisions 
          regarding further medical consultation.
        </p>
      </div>

      {/* Section: Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-400">
          Ready to test our AI model? Upload your X-ray now and get instant results.
        </p>
        <a
          href="/predict"
          className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Try Prediction
        </a>
      </div>
    </div>
  );
};

export default About;
