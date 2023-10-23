# Car Rental

Application for car rental in Ukraine. The application consists of 3 pages:
Home, Catalog, Favorites.

## Home

The Home page contains description and conditions of car rental, as well as
cities available for rent.

## Catalog

The Catalog page renders the list of cars that come from the backend. To view a
car in detail, you can click on the button and open a modal window with detailed
information about the car. Each car in the list can be added to favorites.

## Favorites

Favorites page displays favorite cars.

### Technology

The application is written with React. The data in the local storage (favorite
cars) is saved using Redux. Modal windows are created by portals using
react-modal.

#### Link to the live page: https://anigvo.github.io/car-rental/
