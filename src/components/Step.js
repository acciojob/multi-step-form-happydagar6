import React from 'react';

const Step = ({ currentStep, formData, onInputChange, onNext, onPrevious, onSubmit }) => {

  // STEP 1 UI
  if (currentStep === 1) {
    return (

      <div id="step1">
        <h3>Customer Details</h3>
        <div className='input-group'>
          <label>First Name:</label>
          <input type='text' id='first_name' value={formData.first_name} onChange={onInputChange} />
        </div>
        <div className='input-group'>
          <label>Last Name:</label>
          <input type='text' id='last_name' value={formData.last_name} onChange={onInputChange} />
        </div>
        
        <div className='button-group'>
          <button id="next" type='button' onClick={onNext}>Next</button>
        </div>
      </div>
    );
  }

  // STEP 2 UI
  if (currentStep === 2) {
    return (
      <div id="step2">
        <h3>Car Details</h3>
        <div className='input-group'>
          <label>Model:</label>
          <input type='text' id='model' value={formData.model} onChange={onInputChange} />
        </div>
        <div className='input-group'>
          <label>Car Price:</label>
          
          <input type='text' id='car_price' value={formData.car_price} onChange={onInputChange} />
        </div>
        
        <div className='button-group'>
          <button id="prev" type='button' onClick={onPrevious}>Previous</button>
          <button id="next" type='button' onClick={onNext}>Next</button>
        </div>
      </div>
    );
  }

  // STEP 3 UI
  if (currentStep === 3) {
    const isCardValidLength = formData.card_info.length === 12 || formData.card_info.length === 0;
    const isExpiryValidFormat = /^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry_date) || formData.expiry_date.length === 0;

    return (
      <div id="step3" key="step3">
        <h3>Payment Details</h3>
        <div className='input-group'>
          <label>Credit Card Number:</label>
          <input type='text' id='card_info' value={formData.card_info} onChange={onInputChange} />
          {!isCardValidLength && (
            <p className='error-text'>Credit card number must be exactly 12 digits long.</p>
          )}
        </div>
        <div className='input-group'>
          <label>Expiration Date:</label>
          <input type='text' id="expiry_date" placeholder="MM/YY" value={formData.expiry_date} onChange={onInputChange} />
          {!isExpiryValidFormat && (
            <p className='error-text'>Expiration date must be in the format MM/YY.</p>
          )}
        </div>
        
        <div className='button-group'>
          <button id="prev" type='button' onClick={onPrevious}>Previous</button>
          <button id="submit" type='button' onClick={onSubmit}>Submit</button>
        </div>
      </div>
    );
  }

  // Agar currentStep valid nahi hai
  return null;
};

export default Step;