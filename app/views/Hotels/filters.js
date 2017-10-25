import SingleTextFilter from 'components/FilterPanel/Filters/SingleTextFilter';
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
];

export default filters.map(({ key, component, props }) =>
  connect(() => ({ key, ...props }))(component)
);
