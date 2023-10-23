import styled from '@emotion/styled';

export const CatalogContainer = styled.div`
  padding-left: 128px;
  padding-right: 128px;
  margin-bottom: 50px;
  text-align: center;
`;

export const CarCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
`;

export const LoadMoreButton = styled.button`
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #3470ff;
  font-size: 16px;
  line-height: 1.5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const CatalogNonFound = styled.button`
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  padding: 7px 14px;
  background-color: transparent;
  border: none;
  color: #ffffff;
  background-color: #3470ff;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
