import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const PhoneInputWithCountryCode = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <div className='p-5 rounded-2xl   items-center py-3 px-4 text-xl font-medium text-center text-gray-900 border border-gray-300 '>
      <PhoneInput
        defaultCountry="IN"
        placeholder="phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        // countrySelectProps={{ unicodeFlags: true }}
      />
    </div>

  );
};

export default PhoneInputWithCountryCode;
