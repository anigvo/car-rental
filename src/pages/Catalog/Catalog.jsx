import { toast, Toaster } from 'react-hot-toast';
import React, { useState, useEffect } from 'react';
import { CarCard } from '../../components/CarCard/CarCard';
import {
  CarCardList,
  CatalogContainer,
  LoadMoreButton,
  CatalogNonFound,
} from './Catalog.styled';
import { getCars } from '../../api/cars';
import { CarForm } from 'components/CarForm/CarForm';
import { Loader } from 'components/Loader/Loader';
const Catalog = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formCar, setFormCar] = useState('');
  const [formPrice, setFormPrice] = useState('');
  const [formMileage, setFormMileage] = useState({
    min: '',
    max: '',
  });
  const [isFiltred, setIsFiltred] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 8;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const carsData = await getCars();
      setData(carsData);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const loadMoreCars = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (isNaN(Number(formMileage.min)) || isNaN(Number(formMileage.max))) {
      toast.error('Ops! Please enter a number!');
      return;
    }
    setFilteredCars([]);
    setIsFiltred(false);
    setCurrentPage(1);
    const filterCar = filterCars(data);
    setFilteredCars(filterCar);
    setIsFiltred(true);
  };

  const filterCars = cars => {
    return cars.filter(car => {
      if (
        (!formCar || formCar === car.make) &&
        (!formPrice || Number(formPrice) >= car.rentalPrice) &&
        (!formMileage.min || Number(formMileage.min) < car.mileage) &&
        (!formMileage.max || Number(formMileage.max) > car.mileage)
      ) {
        return true;
      } else {
        return false;
      }
    });
  };
  const resetInput = () => {
    setCurrentPage(1);
    setFormCar('');
    setFormPrice('');
    setFormMileage({
      min: '',
      max: '',
    });
    setIsFiltred(false);
    setFilteredCars([]);
  };

  const indexOfLastCar = currentPage * itemsPerPage;
  const currentCars = data.slice(0, indexOfLastCar);
  const currentFilteredCars = filteredCars.slice(0, indexOfLastCar);

  return (
    <CatalogContainer>
      <Toaster position="top-center" reverseOrder={false} />
      <CarForm
        setFormCar={setFormCar}
        setFormPrice={setFormPrice}
        formMileage={formMileage}
        setFormMileage={setFormMileage}
        handleSubmit={handleSubmit}
        formCar={formCar}
        formPrice={formPrice}
        resetInput={resetInput}
      />
      {isLoading ? (
        <Loader />
      ) : isFiltred && filteredCars.length === 0 ? (
        <CatalogNonFound onClick={resetInput}>
          Cars not found, try other search criteria or click this to reset{' '}
        </CatalogNonFound>
      ) : (
        <CarCardList>
          {isFiltred
            ? currentFilteredCars.map(car => <CarCard key={car.id} car={car} />)
            : currentCars.map(car => <CarCard key={car.id} car={car} />)}
        </CarCardList>
      )}
      {isFiltred
        ? filteredCars.length > indexOfLastCar && (
            <LoadMoreButton onClick={loadMoreCars}>Load more</LoadMoreButton>
          )
        : data.length > indexOfLastCar && (
            <LoadMoreButton onClick={loadMoreCars}>Load more</LoadMoreButton>
          )}
    </CatalogContainer>
  );
};

export default Catalog;
