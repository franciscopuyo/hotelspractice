import React from 'react';
import FilterPanel from 'components/FilterPanel';
import filters from './filters';

class Hotels extends React.Component {
  render = () => (
    <div className="col-12">
      <div className="col-md-4">
        <FilterPanel filters={filters} />
      </div>
    </div>
  )
}

export default Hotels;
