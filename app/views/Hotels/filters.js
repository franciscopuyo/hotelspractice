import SingleTextFilter from 'components/FilterPanel/Filters/SingleTextFilter';
import StarFilter from 'components/FilterPanel/Filters/StarFilter';
import { connect } from 'react-redux';

const filters = [
  {
    key: 'name',
    component: SingleTextFilter,
    props: {
      icon: 'Glass',
      name: 'Nombre del Hotel',
      placeholder: 'Ingrese el nombre del hotel que esta buscando',
    },
  },
  {
    key: 'star',
    component: StarFilter,
    props: {
      icon: 'Star',
      name: 'Estrellas',
      quantity: 5,
    },
  },
];

export default filters.map(({ key, component, props }) =>
  connect(() => ({ key, ...props }))(component)
);
