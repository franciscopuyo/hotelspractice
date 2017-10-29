import React from 'react';
import PropTypes from 'prop-types';
import Glass from '../../../../assets/icons/filters/search.svg';
import Star from '../../../../assets/icons/filters/star.svg';
import Bathrobes from '../../../../assets/icons/amenities/bathrobes.svg';
import Bathtub from '../../../../assets/icons/amenities/bathtub.svg';
import Beach from '../../../../assets/icons/amenities/beach.svg';
import BeachPool from '../../../../assets/icons/amenities/beach-pool-facilities.svg';
import BusinessCenter from '../../../../assets/icons/amenities/business-center.svg';
import ChildrenClub from '../../../../assets/icons/amenities/children-club.svg';
import CoffeeMaker from '../../../../assets/icons/amenities/coffe-maker.svg';
import SpeakingBathtub from '../../../../assets/icons/amenities/deep-soaking-bathtub.svg';
import fitnessCenter from '../../../../assets/icons/amenities/fitness-center.svg';
import Garden from '../../../../assets/icons/amenities/garden.svg';
import Kitchen from '../../../../assets/icons/amenities/kitchen-facilities.svg';
import Newspaper from '../../../../assets/icons/amenities/newspaper.svg';
import NightClub from '../../../../assets/icons/amenities/nightclub.svg';
import Restaurant from '../../../../assets/icons/amenities/restaurant.svg';
import SafetyBox from '../../../../assets/icons/amenities/safety-box.svg';
import SeparateBedroom from '../../../../assets/icons/amenities/separate-bredroom.svg';
import Sheets from '../../../../assets/icons/amenities/sheets.svg';

const svgs = {
  Glass,
  Star,
  bathrobes: Bathrobes,
  bathtub: Bathtub,
  beach: Beach,
  'beach-pool-facilities': BeachPool,
  'business-center': BusinessCenter,
  'children-club': ChildrenClub,
  'coffe-maker': CoffeeMaker,
  'deep-soaking-bathtub': SpeakingBathtub,
  'fitness-center': fitnessCenter,
  garden: Garden,
  'kitchen-facilities': Kitchen,
  newspaper: Newspaper,
  nightclub: NightClub,
  restaurant: Restaurant,
  'safety-box': SafetyBox,
  'separate-bredroom': SeparateBedroom,
  sheets: Sheets,
};

class Icon extends React.Component {
  static propTypes = {
    fill: PropTypes.string,
    size: PropTypes.number,
    icon: PropTypes.string.isRequired,
  };

  static defaultProps = {
    size: 18,
    fill: '#157ab1',
  };

  render = () => {
    const SelectedSVG = svgs[this.props.icon];
    return (
      <SelectedSVG
        fill={this.props.fill}
        width={this.props.size}
        {...this.props}
      />
    );
  }
}

export default Icon;
