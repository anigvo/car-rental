import React, { useState } from 'react';
import Modal from '../../layout/Modal/Modal';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
  CarCardContainer,
  CarCardImgWrap,
  CarCardImg,
  FavoriteButton,
  CarCardContent,
  CarCardTitleWrap,
  CarName,
  CarPrice,
  TagList,
  TagItem,
  LearnMoreButton,
  CarCardTitle,
  CarDescription,
  ModalTitle,
  RentalBtn,
  ConditionItem,
  ConditionSpan,
  ConditionList,
} from './CarCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/favorites/favoritesSlice';
import { selectFavorites } from 'redux/selectors';

export const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite =
    favorites && favorites.some(favoriteCar => favoriteCar.id === car.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const closeOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const formatNumberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <CarCardContainer>
      <CarCardImgWrap>
        <CarCardImg src={car.img} alt={car.description} />
        <FavoriteButton onClick={handleFavoriteClick} favoriteCar={isFavorite}>
          {isFavorite ? (
            <AiFillHeart size={18} />
          ) : (
            <AiOutlineHeart size={18} />
          )}
        </FavoriteButton>
      </CarCardImgWrap>
      <CarCardContent>
        <CarCardTitleWrap>
          <CarCardTitle>
            {car.make} <CarName>{car.model}</CarName>, {car.year}
          </CarCardTitle>
          <CarPrice>${car.rentalPrice}</CarPrice>
        </CarCardTitleWrap>
        <TagList>
          <TagItem>{car.address}</TagItem>
          <TagItem>{car.rentalCompany}</TagItem>
          <TagItem>{car.type}</TagItem>
          <TagItem>{car.model}</TagItem>
          <TagItem>{car.mileage}</TagItem>
          <TagItem>{car.functionalities[0]}</TagItem>
        </TagList>
      </CarCardContent>
      <LearnMoreButton onClick={openModal}>Learn More</LearnMoreButton>
      {isModalOpen && (
        <Modal onClose={closeModal} closeOnBackdropClick={closeOnBackdropClick}>
          <CarCardImgWrap>
            <CarCardImg src={car.img} alt={car.description} />
          </CarCardImgWrap>
          <CarCardContent isModal={true}>
            <CarCardTitleWrap>
              <CarCardTitle>
                {car.make} <CarName>{car.model}</CarName>, {car.year}
              </CarCardTitle>
            </CarCardTitleWrap>
            <TagList isModal={true}>
              <TagItem>{car.address}</TagItem>
              <TagItem>Id: {car.id}</TagItem>
              <TagItem>Year: {car.year}</TagItem>
              <TagItem>Type: {car.type}</TagItem>
              <TagItem>Fuel Consumption: {car.fuelConsumption}</TagItem>
              <TagItem>Engine Size: {car.engineSize}</TagItem>
            </TagList>
            <CarDescription>{car.description}</CarDescription>
          </CarCardContent>
          <CarCardContent>
            <ModalTitle>Accessories and functionalities:</ModalTitle>
            <TagList>
              {car.accessories.map((acc, index) => (
                <TagItem key={index}>{acc}</TagItem>
              ))}
              {car.functionalities.map((func, index) => (
                <TagItem key={index}>{func}</TagItem>
              ))}
            </TagList>
          </CarCardContent>
          <CarCardContent>
            <ModalTitle>Rental Conditions: </ModalTitle>
            <ConditionList>
              {car.rentalConditions.split('\n').map((condition, index) => {
                const parts = condition.split(': ');
                return (
                  <ConditionItem key={index}>
                    {parts.length === 2 ? (
                      <>
                        {parts[0]}: <ConditionSpan>{parts[1]}</ConditionSpan>
                      </>
                    ) : (
                      <>{condition}</>
                    )}
                  </ConditionItem>
                );
              })}
              <ConditionItem>
                Mileage:
                <ConditionSpan>
                  {' '}
                  {formatNumberWithCommas(car.mileage)}
                </ConditionSpan>
              </ConditionItem>
              <ConditionItem>
                Price:
                <ConditionSpan> {car.rentalPrice}$</ConditionSpan>
              </ConditionItem>
            </ConditionList>
          </CarCardContent>
          <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
        </Modal>
      )}
    </CarCardContainer>
  );
};
