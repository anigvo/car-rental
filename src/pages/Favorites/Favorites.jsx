import { selectFavorites } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { CarCard } from '../../components/CarCard/CarCard';
import {
  FavoritesContainer,
  FavoritesList,
  FavoritesText,
} from './Favorites.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <FavoritesContainer>
      {favorites.length === 0 ? (
        <FavoritesText>
          Not found favorites cars, add some at catalog
        </FavoritesText>
      ) : (
        <FavoritesList>
          {favorites.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </FavoritesList>
      )}
    </FavoritesContainer>
  );
};

export default Favorites;
