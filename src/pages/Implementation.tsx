import React from "react";

const Implementation = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-400">Implementation Details</h1>
        <p className="mt-4 text-lg text-gray-300">
          This section outlines the technical approach used in our pneumonia prediction system, including model architecture, dataset, and deployment.
        </p>
      </div>

      {/* Section: Dataset */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-300">Dataset</h2>
        <p className="mt-3 text-gray-300">
          We used the **Chest X-ray dataset from Kaggle**, which contains labeled X-ray images of patients with and without pneumonia. The dataset is preprocessed by resizing images, normalizing pixel values, and augmenting data to improve model generalization.
        </p>
      </div>

      {/* Section: Model Architecture */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-300">Deep Learning Model</h2>
        <p className="mt-3 text-gray-300">
          Our model is based on **Swin Transformer**, a powerful vision transformer architecture that effectively captures spatial hierarchies in medical images. The model is trained using **PyTorch/TensorFlow**, optimized with Adam optimizer, and evaluated using accuracy and F1-score metrics.
        </p>
      </div>

      {/* Section: Training & Optimization */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-300">Training & Optimization</h2>
        <p className="mt-3 text-gray-300">
          - Training was conducted on a **30GB GPU RAM Kaggle environment** for faster computation.  
          - Techniques such as **learning rate scheduling, dropout, and data augmentation** were applied to enhance model performance.  
          - We reduced the dataset to **10% for quicker experimentation** while maintaining high accuracy.  
        </p>
      </div>

      {/* Section: Deployment */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-300">Deployment</h2>
        <p className="mt-3 text-gray-300">
          - The trained model is deployed as a **Flask/FastAPI backend**.  
          - The frontend is built with **React (Vite + TypeScript + Tailwind CSS)** to provide an interactive user experience.  
          - Users can **upload chest X-rays**, and the model will return predictions in real time.  
          - The application is hosted on **GitHub Pages** (frontend) and **Render/Heroku for backend API**.
        </p>
      </div>

      {/* Section: Future Improvements */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-300">Future Enhancements</h2>
        <p className="mt-3 text-gray-300">
          - Fine-tuning the model with **larger medical datasets** for improved accuracy.  
          - Implementing **Grad-CAM visualization** for better explainability.  
          - Developing a **mobile-friendly version** for wider accessibility.  
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-400">
          Want to see it in action? Try predicting pneumonia using our model!
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

export default Implementation;
