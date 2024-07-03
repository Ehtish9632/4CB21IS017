import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [numberId, setNumberId] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setNumberId(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      setResponseData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Average Calculator</h2>
      <label>
        Enter number ID ('p', 'f', 'e', 'r'):
        <input type="text" value={numberId} onChange={handleInputChange} />
      </label>
      <button onClick={fetchData}>Fetch Data</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {responseData && (
        <div>
          <h3>Previous State: {JSON.stringify(responseData.windowPrevState)}</h3>
          <h3>Current State: {JSON.stringify(responseData.windowCurrState)}</h3>
          <p>Numbers from Server: {JSON.stringify(responseData.numbers)}</p>
          <p>Average: {responseData.avg}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
