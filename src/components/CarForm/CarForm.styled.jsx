import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 18px;
`;

export const Input = styled.input`
  height: 52px;
  text-align: start;
  padding: 14px 0 14px 24px;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  outline: none;
  &::placeholder {
    opacity: 1;
    color: #121417;
  }
  border-left: ${props =>
    props.direction === 'left' ? 'none' : '1px solid #8A8A8933'};
  border-right: ${props =>
    props.direction === 'right' ? 'none' : '1px solid #8A8A8933'};

  border-top-left-radius: ${props =>
    props.direction === 'left' ? '14px' : '0'};
  border-bottom-left-radius: ${props =>
    props.direction === 'left' ? '14px' : '0'};
  border-top-right-radius: ${props =>
    props.direction === 'right' ? '14px' : '0'};
  border-bottom-right-radius: ${props =>
    props.direction === 'right' ? '14px' : '0'};
`;
export const Select = styled.select`
  height: 52px;
  padding: 14px 18px;
  text-align: center;
  border-radius: 14px;
  background-color: #f7f7fb;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  outline: none;
  cursor: pointer;
  &::placeholder {
    opacity: 1;
    color: #121417;
  }
  &:not(:last-child) {
    margin-right: 18px;
  }
`;

export const Option = styled.option`
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  height: 48px;
  padding: 14px 48px;
  border-radius: 12px;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => (props.disabled ? '#12141780' : '#0b44cd')};
  }
  background-color: ${props => (props.disabled ? '#12141780' : '#3470ff')};
  color: #ffffff;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  margin-right: 20px;
`;

export const LabelWrap = styled.div`
  display: flex;
`;

export const ResetButton = styled.button`
  height: 48px;
  padding: 14px 48px;
  border-radius: 12px;
  border: none;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${props => (props.disabled ? '#12141780' : '#0b44cd')};
  }
  background-color: ${props => (props.disabled ? '#12141780' : '#3470ff')};
  color: #ffffff;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
