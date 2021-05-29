import React, { useState, useEffect } from 'react';
import { getBook } from '../../services/booksService';
import { DetailsContainer, 
         BookAuthors, 
         BookCover, 
         BookTitle, 
         BookDescription, 
         BookMenu, 
         MenuItem,
         MenuLabel,
         BackIcon,
         Icon} from './styles';
import DefaultBookCover from '../../shared/defaultBookCover';
import Back from '../../icons/back.svg';
import BookOpen from '../../icons/book-open.svg';
import Headphones from '../../icons/headphones.svg';
import Share from '../../icons/share.svg';

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