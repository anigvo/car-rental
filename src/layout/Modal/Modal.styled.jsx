import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: relative;
  background: #fff;
  padding: 40px;
  border-radius: 24px;
  width: 541px;
`;
export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  color: #121417;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #3470ff;
  }
`;

export const Backdrop = styled.div`
  background-color: #12141780;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
