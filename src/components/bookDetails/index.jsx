import React, { useState, useEffect } from 'react';
import { getBook } from '../../services/booksService';
import DefaultBookCover from '../../shared/defaultBookCover';
import Back from '../../icons/back.svg';
import BookOpen from '../../icons/book-open.svg';
import Headphones from '../../icons/headphones.svg';
import Share from '../../icons/share.svg';
import Oval from '../../images/oval.png';
import { Circle, Image } from '../../shared/shapes';
import { DetailsContainer,
         BookAuthors, 
         BookCover, 
         BookTitle, 
         BookDescription, 
         BookMenu, 
         MenuItem,
         MenuLabel,
         AbstractBackground,
         BackIcon,
         Icon} from './styles';

const BookDetails = (props) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    const bookId = props.match.params.id;
    getBook(bookId)
      .then(result => setBook(result.data));
  }, [props.match.params.id]);

  const renderBookCover = () => {
    if (book.volumeInfo && book.volumeInfo.imageLinks) {
      return <BookCover src={book.volumeInfo.imageLinks.thumbnail} 
                        alt={book.volumeInfo.title} />
    }
    return <DefaultBookCover>No image available</DefaultBookCover>;
  }

  const renderBookDetails = () => {
    if (book.volumeInfo) {
      return (
        <>
          <BookTitle>{book.volumeInfo.title}</BookTitle>
          <BookAuthors>{book.volumeInfo.authors.join(', ')}</BookAuthors>
          <BookDescription>{book.volumeInfo.description}</BookDescription>
        </>
      )
    }
    return null;
  }

  return (
    <DetailsContainer>
      <AbstractBackground>
        <Circle backgroundColor="#FF6978" borderColor="#FF6978" width="15px" height="15px" left="10%" top="50%" />
        <Circle backgroundColor="#00173D" borderColor="#00173D" width="63px" height="63px" left="25%" top="45%" />
        <Circle borderColor="#4550A7" width="24px" height="24px" right="30%" top="20%" />
        <Image src={Oval} width="100px" height="100px" right="0%" top="0%" transform="rotate(180deg)" />
        <Image src={Oval} width="48px" height="48px" right="30%" top="65%" />
      </AbstractBackground>
      <BackIcon src={Back} onClick={() => props.history.goBack()} />

      {renderBookCover()}
      {renderBookDetails()}
      
      <BookMenu>
        <MenuItem>
          <Icon src={BookOpen} />
          <MenuLabel>Read</MenuLabel>
        </MenuItem>
        <MenuItem>
          <Icon src={Headphones} />
          <MenuLabel>Listen</MenuLabel>
        </MenuItem>
        <MenuItem>
          <Icon src={Share} />
          <MenuLabel>Share</MenuLabel>
        </MenuItem>
      </BookMenu>
    </DetailsContainer>
  );
};

export default BookDetails;