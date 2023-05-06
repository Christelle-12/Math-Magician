import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Generator() {
  const [quote, setQuote] = useState('');
  const [author, setWriter] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.api-ninjas.com/v1/quotes?category=birthday', {
          headers: {
            'X-Api-Key': 'cxQLglGKTUOJNlHkv+iifA==GPpJPOD1KR4DL5XW',
          },
        });
        setQuote(res.data[0].quote);
        setWriter(res.data[0].author);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="waiting">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quotes">
      <h2>Quotes:</h2>
      <p>{quote}</p>
      <p>
        -
        {author}
      </p>
    </div>
  );
}

export default Generator;