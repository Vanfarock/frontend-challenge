import React, { useEffect, useState } from 'react';
import DiscoverCarousel from '../discoverCarousel';
import ReadingCarousel from '../readingCarousel';
import ReviewsCarousel from '../reviewsCarousel';
import BooksSearchPage from './../booksSearchPage/index';
import { HomeContainer,
         UserGreetings,
         UserName } from './styles';

const Home = ({ searchKey }) => {
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setIsSearching(false);
  }, [searchKey]);

  const handleSearch = query => {
    setIsSearching(query);
  }

  const renderHomeContent = () => (
    <>
      <UserGreetings>Hi, <UserName>Mehmed Al Fatih</UserName> 👋</UserGreetings>
      
      <DiscoverCarousel />
      <ReadingCarousel />
      <ReviewsCarousel />
    </>
  )

  return (
    <HomeContainer>
      <BooksSearchPage key={searchKey} onSearch={handleSearch}/>

      {!isSearching && renderHomeContent()}
    </HomeContainer>
  );
};

export default Home;