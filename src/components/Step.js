import React from 'react';

const Step = ({ currentStep, formData, onInputChange, onNext, onPrevious, onSubmit }) => {
  return (
    <div>
      {/* === STEP 1 (Sirf Inputs) === */}
      {currentStep === 1 && (
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
        </div>
      )}

      {/* === STEP 2 (Sirf Inputs) === */}
      {currentStep === 2 && (
        <div id="step2">
          <h3>Car Details</h3>
          <div className='input-group'>
            <label>Model:</label>
            <input type='text' id='model' value={formData.model} onChange={onInputChange} />
          </div>
          <div className='input-group'>
            <label>Car Price:</label>
            <input type='number' id='car_price' value={formData.car_price} onChange={onInputChange} />
          </div>
        </div>
      )}

      {/* === STEP 3 (Sirf Inputs + Validation) === */}
      {currentStep === 3 && (
        <div id="step3">
          <h3>Payment Details</h3>
          <div className='input-group'>
            <label>Credit Card Number:</label>
            <input type='text' id='card_info' value={formData.card_info} onChange={onInputChange} />
            {/* Validation messages */}
            {formData.card_info.length > 0 && formData.card_info.length !== 12 && (
              <p className='error-text'>Credit card number must be exactly 12 digits long.</p>
            )}
          </div>
          <div className='input-group'>
            <label>Expiration Date:</label>
            <input type='text' id="expiry_date" placeholder="MM/YY" value={formData.expiry_date} onChange={onInputChange} />
            {/* Validation messages */}
            {formData.expiry_date.length > 0 && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry_date) && (
              <p className='error-text'>Expiration date must be in the format MM/YY.</p>
            )}
          </div>
        </div>
      )}

      {/* === BUTTONS (Safe Zone - Steps ke baahar) === */}
      <div className='button-group'>
        {currentStep > 1 && (
          <button id="prev" type="button" onClick={onPrevious}>Previous</button>
        )}
        
        {currentStep < 3 && (
          <button id="next" type="button" onClick={onNext}>Next</button>
        )}
        
        {currentStep === 3 && (
          <button id="submit" type="button" onClick={onSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Step;