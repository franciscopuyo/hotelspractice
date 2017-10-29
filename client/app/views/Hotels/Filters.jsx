import React from 'react';
import SingleTextFilter from 'components/FilterPanel/Filters/SingleTextFilter';
import StarFilter from 'components/FilterPanel/Filters/StarFilter';

const filters = [
  {
    key: 'name',
    Component: SingleTextFilter,
    props: {
      name: 'name',
      icon: 'Glass',
      title: 'Nombre del Hotel',
      placeholder: 'Ingrese el nombre del hotel que esta buscando',
    },
  },
  {
    key: 'star',
    Component: StarFilter,
    props: { name: 'stars' },
  },
];

export default filters.map(({ key, Component, props }) => <Component key={key} {...props} />);
