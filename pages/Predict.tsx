import React, { useState } from "react";

const Predict = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select an image file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("YOUR_BACKEND_API_URL", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(`Prediction Result: ${data.prediction}`);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Pneumonia Prediction</h1>
      
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-500 rounded-lg p-6 w-full max-w-md">
        {preview ? (
          <img src={preview} alt="Preview" className="w-64 h-64 object-cover rounded-lg mb-4" />
        ) : (
          <p className="text-gray-400">Upload a chest X-ray image</p>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-4 file:bg-blue-500 file:text-white file:px-4 file:py-2 file:border-none file:rounded-lg file:cursor-pointer file:hover:bg-blue-600"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Predict
      </button>
    </div>
  );
};

export default Predict;
