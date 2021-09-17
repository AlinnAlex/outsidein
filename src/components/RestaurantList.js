import {useEffect} from 'react';
import {loadRestaurants} from '../store/restaurants/actions';
import {connect} from 'react-redux';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = {loadRestaurants};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
