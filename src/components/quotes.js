import React, { useEffect, useState } from 'react';
import '../index.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=friendship', {
          method: 'GET',
          headers: {
            'X-API-Key': 'k18X0XPrNPDIJOUaRqJ+EA==QkagxROul4YyvmfI',
          },
        });
        const json = await res.json();
        setQuotes(json);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchQuotes();
  }, []);

  if (error || quotes.length === 0) {
    return <div>Please wait I am loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="q-container">
      <ul className="ul">
        {quotes.map(({ author, quote }) => (
          <li key={author}><em>{quote}</em></li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
