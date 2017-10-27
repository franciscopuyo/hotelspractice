import React from 'react';
import FilterPanel from 'components/FilterPanel';
import ResultsList from 'components/ResultsList';
import filters from './Filters.jsx';

class Hotels extends React.Component {
  render = () => (
    <div className="col-12">
      <div className="col-md-3">
        <FilterPanel filters={filters} />
      </div>
      <div className="col-md-9">
        <ResultsList />
      </div>
    </div>
  )
}

export default Hotels;
