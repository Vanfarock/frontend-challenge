import React, { useState } from 'react';
import { getBooks } from './../../services/booksService';
import TextInput from '../../shared/textInput';
import Search from '../../icons/search.svg';
import DefaultBookCover from '../../shared/defaultBookCover';
import { SearchPageContainer, 
         BooksGrid, 
         Book, 
         BookCover, 
         BookTitle, 
         BookAuthor, 
         LoadMoreButton } from './styles';

const SearchPage = () => {
  const maxRecords = 12;

  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  
  const handleQueryChange = async e => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    const { totalItems, items} = await searchBooks(newQuery, currentIndex);
    const newBooks = items ? items : [];
    
    setBooks(newBooks);
    setTotalResults(totalItems);
    setCurrentIndex(0);
  }
  
  const loadMore = async() => {
    const newIndex = currentIndex + maxRecords;
    const { items } = await searchBooks(query, newIndex);
    const newBooks = items ? items : [];

    setBooks([...books, ...newBooks]);
    setCurrentIndex(newIndex);
  }

  const searchBooks = async(searchQuery, searchIndex) => {
    let booksData = {};
    
    if (searchQuery) {
      const { data } = await getBooks(searchQuery, searchIndex, maxRecords);
      
      booksData = data;
    }
    
    return booksData;
  }

  const renderBookCover = book => {
    if (book.volumeInfo.imageLinks) {
      return <BookCover src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
    }
    return <DefaultBookCover>No image available</DefaultBookCover>
  }

  return (
    <SearchPageContainer>
      <TextInput icon={Search} 
                 onChange={handleQueryChange} 
                 value={query}
                 placeholder={"Search book"} />
      <BooksGrid>
        {books.map(book => (
          <Book to={`/books/${book.id}`} key={book.etag}>
            {renderBookCover(book)}
            <BookTitle>{book.volumeInfo.title}</BookTitle>
            {book.volumeInfo.authors && book.volumeInfo.authors.length && 
              <BookAuthor>by {book.volumeInfo.authors[0]}</BookAuthor>
            }
          </Book>
        ))}
      </BooksGrid>
      {currentIndex <= totalResults - 1 && <LoadMoreButton onClick={loadMore}>Load more</LoadMoreButton>}
    </SearchPageContainer>
  );
};

export default SearchPage;