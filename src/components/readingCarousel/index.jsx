import React, { useEffect, useState } from 'react';
import Section from '../../shared/section';
import Chapter from '../../icons/chapter.svg';
import Oval from "../../images/oval.png";
import { getBooks } from './../../services/booksService';
import { Circle, Rectangle, Image } from './../../shared/shapes';
import { OutterContainer,
         CardContainer,
         Column,
         BookTitle,
         BookAuthor,
         ChapterIcon,
         BookChapter,
         CurrentChapter,
         BookCover} from './styles';


const ReadingCarousel = () => {
  const [currentlyReading, setCurrentlyReading] = useState([]);

  useEffect(() => {
    let mounted = true;

    getBooks('Hooked', 0, 4)
      .then((res) => {
        const items = res.data.items ? res.data
                                          .items
                                          .filter(item => item.volumeInfo && item.volumeInfo.imageLinks)
                                     : [];
        if (mounted) {
          setCurrentlyReading([items[0]]);
        }
      });
    return () => {
      mounted = false;
    }
  }, []);

  const renderCurrentlyReading = items => {
    return items.map(item => ({
      content: () => (
        <OutterContainer key={item.etag}>
          <BookCover src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
          <CardContainer>
            <Column>
              <BookTitle to={`/books/${item.id}`}>{item.volumeInfo.title}</BookTitle>
              <BookAuthor>{item.volumeInfo.authors}</BookAuthor>
              <BookChapter>
                <ChapterIcon src={Chapter} /> Chapter <CurrentChapter> 2 </CurrentChapter> From 9
              </BookChapter>
            </Column>
            <Circle left="75%" top="-5%" width="18px" height="18px" />
            <Rectangle right="-23px" top="75%" />
            <Image src={Oval} right="-10%" top="-10%" width="69px" height="69px" zindex="2" transform="rotate(180deg)" />
          </CardContainer>
        </OutterContainer>
      )
    }));
  }
  
  return (
    <Section title="Currently reading" viewMoreLabel="All" viewMoreTo="/" items={renderCurrentlyReading(currentlyReading)} />
  );
};

export default ReadingCarousel;