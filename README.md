# Demo React Storefront Challenge Solution

This project contains the storefront application UI developed in React.

## NPM tasks

In the project directory, you can:

#### Run the application

```bash
npm start
```

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Test the application

```bash
npm test
```

Launches the test runner for the application.

#### Build the application

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles the app in production mode and optimizes the build for the best performance.
The app is ready to be deployed after the build is successful!

#### Run type checker

```bash
npm run type
```

Run TypeScript type checker to validate the application types

#### Run eslint

```bash
npm run lint
```

Run eslint to analyze, find and fix potential problems with the application code base.

#### Run eslint auto fix

```bash
npm run lint-fix
```

Run eslint to automatically find and fix potential problems with the application code base.

#### Run storybook

```bash
npm run storybook
```

Run storybook to frontend build or test UI components and pages in isolation.

#### Run TS-Prune

```bash
npm run ts-prune
```

Run ts-prune to automatically find all the unused exports on the application code base.

## Troubleshooting

#### Connection issues

A common issue noticed during development is that the server will be unavailable returning 522 or 503.
This took some considerable minutes to be restored. So please try again later.

This also could just be a network connection issue 😁, please do ensure that you are online.

To ensure that this is not an application issue, ping https://fakestoreapi.com/products to see if you get results

## Notes

This app makes use of 4 main components/pages namely Home, Products, Product Overview and Checkout.

#### Home component

Serves as the landing page with a hero and previews a limited number of products to the user. The user is also prompted to view all other available products from there which will redirect them to the `Products` page.

Here I wanted to showcase a sample of the products available on the platform and with this idea, I did not want to load all products initially, only a limited number.

While the API offers this through https://fakestoreapi.com/products?limit=5, I finally decided not to limit products initially when a user lands on the home page but instead send a request for all files. The reason for this is, the API does not give a query or option to fetch the remaining products excluding the already-fetched products.

With this in mind, I would end up sending two requests, provided the user visited the products page, which would return products already present as duplicates. Yes, I could filter those out, but with only a max of 20 products as the max, I thought it was better to fetch them all at once.

#### Products component

Gives access to all the available products the user can go through. The component reuses the `Product Card` component to render the available products. Despite only being able to fetch and display 20 products, I wanted to ensure the component would keep a small memory footprint. I considered at first virtualizing the list (in this case Grid) of Products but thought it would be better to paginate the results page instead. The reason being, as specified in the task additional notes, I did not want to add another module to solve a problem I had another solution.

I also thought it would be ideal to add filtering and sorting to the products fetched from the API.

##### For Sorting:

-   Ascending - Sorts products using their ids in ascending order similar to https://fakestoreapi.com/products?sort=asc but done in React.
-   Descending - Sorts products using their ids in descending order similar to https://fakestoreapi.com/products?sort=desc but done in React.
-   Price High to Low - Sorts products using their prices from the highest to the lowest
-   Price Low to High - Sorts products using their prices from the lowest to the highest

##### For Category Filtering

Allows for products to be displayed based on categories. The categories are fetched from the API using https://fakestoreapi.com/products/categories. I extended the categories with one additional category `All` to show all products in all categories combined

The category filter and sorting options can be combined together.

#### Product Overview

The component provides a detailed view of the selected product and gives further options on selecting the quantity of a product before adding it to the cart. From this component, the user can see how many units are available in stock, read the product description and more.

The user is generally limited on how many units they can add to the cart, but here, they can add more than what is available.

On this component, the user can also see suggested products similar to the currently selected product. These are randomly picked but will be in the same category as the selected product.

#### Checkout

The component provides an overview of the products in the cart, the quantity of each product and the total cost. The user can adjust their cart products but change the quantity of each product entry.

The user can select and delete products or clear the whole cart. From this component, when a user is deleting more than 1 product. The user will have to confirm the request before proceeding.

## Additional Notes on Components

#### Product Card

This is a reusable component for rendering individual products. It displays, the image of the product, title, price, category, and rating.

From the product card, the user can add products to the cart, or favorites. Clicking on the card itself will open the product overview using the `Product Overview` component.
For performance improvements, the images are lazy-loaded via the `react-lazy-load-image-component` module.

#### Error Boundary

The `ErrorBoundary` is in use as the fallback component for any unforeseen critical errors. In case something that crushes the app happens, this component is meant to give more information about the application state and additional pointers on what to do next. I hope no one ever sees this rendered 😁.

#### Message Bar

The message is a simple component for showing the user any important messages about the application state. Most importantly, it will show messages when unexpected events occur such as failing to fetch content from the API.

#### Fallback

This is the 404 fallback component for the application.

#### Store and state management

The application utilizes the redux toolkit for redux state management. More on it here https://redux-toolkit.js.org/
The application has 4 simple reducers namely, cart, favorites, message and products.

#### Component styling

I decided to use react components for the overall styling of the application. The font `Inter` is from google fonts https://fonts.google.com/specimen/Inter?query=Inter and icons are used from https://tabler-icons.io/

## Repo setup notes
I configured Husky to run git pre-push commands to test the linting and type-check for the application. This can be expanded to more, but I was trying to keep it simple for this assessment task.

The codebase is formatted using prettier.

#### Conclusion
I wanted to fulfill the requirements of the project while adding more but I was also trying to have the project in without taking too long. There are more features I would have liked to add, and these include a User account management component and authentication, user carts using https://fakestoreapi.com/carts/5, random product reviews, build optimizations, creating a backend for the app and more. But because of the time and API limitations, I focused on a feel. There is more room to improve the app, but I think this is ready.

#### I will be happy to take any questions and feedback.

### Thank you for reading
