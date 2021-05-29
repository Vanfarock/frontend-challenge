import React from 'react';
import TextInput from '../textInput';
import Search from '../../icons/search.svg';
import PropTypes from 'prop-types';
import { SearchPageContainer, 
         BooksGrid, 
         LoadMoreButton } from './styles';

const SearchPage = ({items, content, query, onLoadMore, onQueryChange, currentIndex, totalResults}) => {
  return (
    <SearchPageContainer>
      <TextInput icon={Search} 
                 onChange={onQueryChange} 
                 value={query}
                 placeholder="Search book" />
      <BooksGrid>
        {items.map(item => content(item))}
      </BooksGrid>
      {currentIndex <= totalResults - 1 && <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>}    </SearchPageContainer>
  );
};

SearchPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  content: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
}

export default SearchPage;