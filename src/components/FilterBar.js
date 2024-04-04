import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilter } from '../redux/reducers/postsReducer';
import { selectSelectedFilter } from '../redux/postsSelectors';

const FilterBar = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectSelectedFilter);

  const handleFilterChange = (filter) => {
    dispatch(setSelectedFilter(filter));
  };

  return (
    <div className='filter-bar'>
      <button
        onClick={() => handleFilterChange('all')}
        className={selectedFilter === 'all' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('few')}
        className={selectedFilter === 'few' ? 'active' : ''}
      >Few comments
      </button>
      <button
        onClick={() => handleFilterChange('many')}
        className={selectedFilter === 'many' ? 'active' : ''}
      >
        Many comments
      </button>
    </div>
  );
};

export default FilterBar;