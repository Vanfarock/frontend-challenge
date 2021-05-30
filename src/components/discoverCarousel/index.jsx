import React, { useEffect, useState } from 'react';
import Section from '../../shared/section';
import Stats from '../../icons/stats.svg';
import Oval from "../../images/oval.png";
import { getBooks } from './../../services/booksService';
import { Circle, Rectangle, Triangle, Image } from './../../shared/shapes';
import { CardContainer,
         Column,
         BookTitle,
         BookAuthor,
         StatsIcon,
         BookStats,
         ReadNow,
         BookCover} from './styles';

const DiscoverCarousel = () => {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    getBooks('Hooked', 0, 4)
      .then((res) => {
        const items = res.data.items ? res.data.items
                                               .filter(item => item.volumeInfo && item.volumeInfo.imageLinks) 
                                     : [];
        setNewBooks(items);
      });
  }, []);

  const renderNewBooks = items => {
    return items.map(item => ({
      content: () => (
        <CardContainer key={item.etag}>
          <Column>
            <BookTitle>{item.volumeInfo.title}</BookTitle>
            <BookAuthor>{item.volumeInfo.authors}</BookAuthor>
            <BookStats>
              <StatsIcon src={Stats} /> 120+ <ReadNow>Read Now</ReadNow>
            </BookStats>
          </Column>
          <Column>
            <BookCover src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
          </Column>
          <Circle left="52.94%" top="10.07%" />
          <Rectangle left="53.37%" top="68.7%" />
          <Triangle left="61.95%" top="2.73%" />
          <Image src={Oval} left="-9.19%" top="17.99%" zindex="2" />
        </CardContainer>
      )
    }));
  }

  return (
    <Section title="Discover new book" viewMoreLabel="More" viewMoreTo="/" items={renderNewBooks(newBooks)} />
  );
};

export default DiscoverCarousel;