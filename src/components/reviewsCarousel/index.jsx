import React, { useEffect, useState } from 'react';
import Section from '../../shared/section';
import { getBooks } from './../../services/booksService';

const ReviewsCarousel = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getBooks('Hooked', 0, 4)
      .then((res) => {
        const items = res.data.items ? res.data.items : [];
        setReviews(items);
      });
  }, []);

  const renderReviews = items => {
    return items.map(item => ({
      content: () => (
        <h1 key={item.etag}>{item.volumeInfo.title}</h1>
      )
    }));
  }

  return (
    <Section title="Reviews of the day" viewMoreLabel="All Video" viewMoreTo="/" items={renderReviews(reviews)} />
  );
};

export default ReviewsCarousel;