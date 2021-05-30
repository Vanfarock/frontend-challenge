import React from 'react';
import DiscoverCarousel from '../discoverCarousel';
import ReadingCarousel from '../readingCarousel';
import ReviewsCarousel from '../reviewsCarousel';
import BooksSearchPage from './../booksSearchPage/index';
import { HomeContainer,
         UserGreetings,
         UserName } from './styles';

const Home = () => {
  return (
    <HomeContainer>
      <BooksSearchPage />
      <UserGreetings>Hi, <UserName>Mehmed Al Fatih</UserName> 👋</UserGreetings>
      
      <DiscoverCarousel />
      <ReadingCarousel />
      <ReviewsCarousel />
    </HomeContainer>
  );
};

export default Home;