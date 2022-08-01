import React, { useState, useEffect } from 'react';
import PersonalDetails from './PersonalDetails.js';

function App() {
  const [pincodeData, setPincodeData] = useState('');
  return (
    <div>
    <PersonalDetails />
    </div>
  );
}
export default App;