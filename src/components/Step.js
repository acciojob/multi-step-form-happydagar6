import React from 'react'

const Step = ({ currentStep, formData, onInputChange, onNext, onPrevious, onSubmit }) => {

    let stepContent;

    // Step 1
    if(currentStep === 1) {
        stepContent = (
            // ✅ FIX 1
            <div id="step1">
                <h3>Customer Details</h3>
                <div className='input-group'>
                    <label>First Name:</label>
                    <input
                        type='text'
                        id='first_name'
                        value={formData.first_name}
                        onChange={onInputChange}
                    />
                </div>
                <div className='input-group'>
                    <label>Last Name:</label>
                    <input
                        type='text'
                        id='last_name'
                        value={formData.last_name}
                        onChange={onInputChange}
                    />
                </div>
            </div>
        );
    }

    // Step 2
    else if(currentStep === 2) {
        stepContent = (
            // ✅ FIX 2
            <div id="step2">
                <h3>Car Details</h3>
                <div className='input-group'>
                    <label>Model:</label>
                    <input
                        type='text'
                        id='model'
                        value={formData.model}
                        onChange={onInputChange}
                    />
                </div>
                <div className='input-group'>
                    <label>Car Price:</label>
                    <input
                        type='number'
                        id='car_price'
                        value={formData.car_price}
                        onChange={onInputChange}
                    />
                </div>
            </div>
        )
    }
    // Step 3
    else if(currentStep === 3) {
        const isCardValidLength = formData.card_info.length === 12 || formData.card_info.length === 0;

        const isExpiryValidFormat = /^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiry_date) || formData.expiry_date.length === 0;
        stepContent = (
            // ✅ FIX 3
            <div id="step3">
                <h3>Payment Details</h3>
                <div className='input-group'>
                    <label>Credit Card Number:</label>
                    <input
                        type='text'
                        id='card_info' // ✅ FIX 4: credit_card ko badal kar card_info kar diya
                        value={formData.card_info}
                        onChange={onInputChange}
                    />
                    {!isCardValidLength && (
                        <p className='error-text'>Credit card number must be exactly 12 digits long.</p>
                    )}
                </div>
                <div className='input-group'>
                    <label>Expiration Date:</label>
                    <input
                    type='text'
                    id="expiry_date"
                    value={formData.expiry_date}
                    onChange={onInputChange}
                    />
                    {!isExpiryValidFormat && (
                        <p className='error-text'>Expiration date must be in the format MM/YY.</p>
                    )}
                </div>
            </div>
        )
    }
  return (
    <div>
      {stepContent}
      <div>
        <div className='button-group'>
            {currentStep > 1 && (
                <button onClick={onPrevious}>
                    Previous
                </button>
            )}

            {currentStep < 3 && (
                <button type='button' onClick={onNext}>
                    Next
                </button>
            )}

            {currentStep === 3 && (
                <button type='button' onClick={onSubmit}>
                    Submit
                </button>
            )}
        </div>
      </div>
    </div>
  )
}

export default Step;