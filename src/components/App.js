import React, { useState } from "react";
import "../styles/App.css";
import Step from "./Step";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleInputChange = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;

    // Make the copy of old form data and add new typed character to it
    setFormData({
      ...formData,
      [inputId]: inputValue,
    });
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Final Form Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <Step
        currentStep={currentStep}
        formData={formData}
        onInputChange={handleInputChange}
        onNext={handleNextStep}
        onPrevious={handlePreviousStep}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default App;
