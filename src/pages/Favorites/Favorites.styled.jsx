import styled from '@emotion/styled';

export const FavoritesContainer = styled.div`
  padding-left: 128px;
  padding-right: 128px;
  margin-bottom: 50px;
  text-align: center;
`;
export const FavoritesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

export const FavoritesText = styled.p`
  text-align: center;
  font-weight: 700;
  color: #121417;
  font-size: 24px;
  line-height: 1.5;
`;
