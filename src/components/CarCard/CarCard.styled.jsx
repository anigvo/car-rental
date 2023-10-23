import styled from '@emotion/styled';

export const CarCardContainer = styled.div`
  width: 100%;
  height: 426px;
`;
export const CarCardImgWrap = styled.div`
  margin-bottom: 14px;
  position: relative;
  height: 268px;
`;
export const CarCardImg = styled.img`
  object-fit: cover;
  border-radius: 14px;
  height: 100%;
`;
export const FavoriteButton = styled.button`
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  padding: 0;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
  color: ${props => (!props.favoriteCar ? `#ffffffcc` : `#3470FF`)};
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${props => (!props.favoriteCar ? `#ffffff` : `#0B44CD`)};
  }
`;
export const CarCardContent = styled.div`
  margin-bottom: ${props => (props.isModal ? '24px' : '28px')};
`;
export const CarCardTitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;
export const CarCardTitle = styled.p``;
export const CarName = styled.span`
  color: #3470ff;
`;
export const CarPrice = styled.p``;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${props => (props.isModal ? '14px' : '0')};
`;
export const TagItem = styled.li`
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #12141780;
  &:not(:last-child) {
    margin-right: 6px;
    &::after {
      content: '|';
      position: absolute;
      margin-left: 3px;
    }
  }
  &:not(:first-of-type) {
    margin-left: 6px;
  }
`;
export const LearnMoreButton = styled.button`
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25;
  color: #ffffff;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
export const CarDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.42;
  color: #121417;
`;

export const ModalTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42;
  color: #121417;
  margin-bottom: 8px;
`;

export const ConditionList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
export const ConditionItem = styled.li`
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 35px;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
`;
export const ConditionSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const RentalBtn = styled.a`
  height: 44px;
  padding: 12px 50px;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  background-color: #3470ff;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
