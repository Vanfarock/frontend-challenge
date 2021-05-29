import React, { useState, useEffect } from 'react';
import Section from '../../shared/section';
import { getBooks } from './../../services/booksService';
import BooksSearchPage from './../booksSearchPage/index';
import { HomeContainer,
         UserGreetings,
         UserName } from './styles';

const Home = () => {
  const [newBooks, setNewBooks] = useState([]);
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getBooks('Hooked', 0, 4)
      .then((res) => {
        const items = res.data.items ? res.data.items : [];
        setNewBooks(items);
        setCurrentlyReading(items);
        setReviews(items);
      });
  }, []);

  const renderNewBooks = items => {
    return items.map(item => ({
      content: (index) => (
        <h1 key={index}>{item.volumeInfo.title}</h1>
      )
    }));
  }

  const renderCurrentlyReading = items => {
    return items.map(item => ({
      content: (index) => (
        <h1 key={index}>{item.volumeInfo.title}</h1>
      )
    }));
  }

  const renderReviews = items => {
    return items.map(item => ({
      content: (index) => (
        <h1 key={index}>{item.volumeInfo.title}</h1>
      )
    }));
  }

  return (
    <HomeContainer>
      <BooksSearchPage />
      <UserGreetings>Hi, <UserName>Mehmed Al Fatih</UserName> 👋</UserGreetings>
      
      <Section title="Discover new book" items={renderNewBooks(newBooks)} />
      <Section title="Currently reading" items={renderCurrentlyReading(currentlyReading)} />
      <Section title="Reviews of the day" items={renderReviews(reviews)} />
    </HomeContainer>
  );
};

export default Home;