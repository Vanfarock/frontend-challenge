import React, { useEffect, useState } from 'react';
import Section from '../../shared/section';
import { getBooks } from './../../services/booksService';

const ReadingCarousel = () => {
  const [currentlyReading, setCurrentlyReading] = useState([]);

  useEffect(() => {
    getBooks('Hooked', 0, 4)
      .then((res) => {
        const items = res.data.items ? res.data.items : [];
        setCurrentlyReading(items);
      });
  }, []);

  const renderCurrentlyReading = items => {
    return items.map(item => ({
      content: () => (
        <h1 key={item.etag}>{item.volumeInfo.title}</h1>
      )
    }));
  }
  
  return (
    <Section title="Currently reading" viewMoreLabel="All" viewMoreTo="/" items={renderCurrentlyReading(currentlyReading)} />
  );
};

export default ReadingCarousel;