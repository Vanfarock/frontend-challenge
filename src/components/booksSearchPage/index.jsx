import React, { useState } from 'react';
import { getBooks } from '../../services/booksService';
import SearchPage from '../../shared/searchPage';
import DefaultBookCover from './../../shared/defaultBookCover';
import { Book, 
         BookCover, 
         BookTitle, 
         BookAuthor } from './styles';

const BooksSearchPage = ({ onSearch }) => {
  const maxRecords = 12;

  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  
  const onQueryChange = async e => {
    const newQuery = e.target.value;
    
    onSearch(newQuery);
    setQuery(newQuery);
    
    const { totalItems, items} = await searchBooks(newQuery, currentIndex);
    const newBooks = items ? items : [];
    
    setBooks(newBooks);
    setTotalResults(totalItems || 0);
    setCurrentIndex(0);
  }
  
  const onLoadMore = async() => {
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

  const getContent = book => (
    <Book to={`/books/${book.id}`} key={book.etag}>
      {renderBookCover(book)}
      
      <BookTitle>{book.volumeInfo.title}</BookTitle>
      
      {book.volumeInfo.authors && book.volumeInfo.authors.length && 
        <BookAuthor>by {book.volumeInfo.authors[0]}</BookAuthor>
      }
    </Book>
  );


  return (
    <SearchPage items={books}
                content={getContent}
                query={query}
                onLoadMore={onLoadMore}
                onQueryChange={onQueryChange}
                currentIndex={currentIndex}
                totalResults={totalResults} />
  );
};

BooksSearchPage.propTypes = {};

export default BooksSearchPage;