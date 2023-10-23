import React from 'react';
import { carNames, prices } from '../../options';
import {
  Form,
  Label,
  Input,
  SubmitButton,
  LabelWrap,
  Option,
  Select,
  ResetButton,
} from './CarForm.styled';

export const CarForm = ({
  setFormCar,
  setFormPrice,
  formMileage,
  setFormMileage,
  handleSubmit,
  formCar,
  formPrice,
  resetInput,
}) => {
  const handleSelectCar = event => {
    setFormCar(event.target.value);
  };

  const handleSelectPrice = event => {
    setFormPrice(event.target.value);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    const numericValue = parseFloat(value.replace(/,/g, ''));
    if (!isNaN(numericValue)) {
      setFormMileage({
        ...formMileage,
        [name]: numericValue,
      });
    } else {
      setFormMileage({ ...formMileage, [name]: value });
    }
  };

  const formatNumberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Car brand
        <Select
          value={formCar}
          onChange={handleSelectCar}
          name="car"
        >
          <Option value="" disabled>
            Select the make...
          </Option>
          {carNames.map(option => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Label>
      <Label>
        Price/ 1 hour
        <Select
          value={formPrice}
          onChange={handleSelectPrice}
          name="price"
        >
          <Option value="" disabled>
            To $
          </Option>
          {prices.map(option => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Label>
      <Label>
        Car mileage / km
        <LabelWrap>
          <Input
            type="text"
            name="min"
            value={formatNumberWithCommas(formMileage.min)}
            onChange={handleInputChange}
            placeholder="From"
            direction={'left'}
          />
          <Input
            type="text"
            name="max"
            value={formatNumberWithCommas(formMileage.max)}
            onChange={handleInputChange}
            placeholder="To"
            direction={'right'}
          />
        </LabelWrap>
      </Label>
      {formCar === '' &&
      formPrice === '' &&
      formMileage.min === '' &&
      formMileage.max === '' ? (
        <SubmitButton disabled={true} type="submit">
          Search
        </SubmitButton>
      ) : (
        <SubmitButton type="submit">Search</SubmitButton>
      )}
      {formCar === '' &&
      formPrice === '' &&
      formMileage.min === '' &&
      formMileage.max === '' ? (
        <ResetButton disabled={true} onClick={() => resetInput()} type="button">
          Reset
        </ResetButton>
      ) : (
        <ResetButton onClick={() => resetInput()} type="button">
          Reset
        </ResetButton>
      )}
    </Form>
  );
};
