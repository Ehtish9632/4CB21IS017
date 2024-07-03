const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberId}`);
      if (response.status === 200) {
        setResponseData(response.data);
        setError(null);
      } else {
        setError('Error fetching data. Server returned an unexpected status.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    }
  };
  