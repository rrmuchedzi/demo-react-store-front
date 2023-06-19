/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { PersistGate } from 'redux-persist/integration/react';
import { ErrorBoundary } from './error';
import { history, store, persistor } from './store';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { Products } from './components/pages/Products';
import { StyledMainContainer } from './style';
import { Fallback } from './components/pages/Fallback';
import { RouterTopScroll } from './components/general/RouterTopScroll';
import { Checkout } from './components/pages/Checkout';
import { ProductOverview } from './components/pages/Products/ProductOverview';
import { GlobalStyle } from './style/global';
import { getProductsThunk } from './redux/products/thunk';
import { Navigation } from './components/general/Navigation';
import { Footer } from './components/general/Footer';
import { StoreMessageBar } from './components/general/MessageBar';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const StoreApp: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // When the app loads, a request to fetch the products must be made.
        // This should only be executed onces.
        dispatch(getProductsThunk());
    });

    return (
        <>
            <Navigation />
            <StyledMainContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products">
                        <Route index={true} element={<Products />} />
                        <Route path=":id" element={<ProductOverview />} />
                    </Route>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<Fallback />} />
                </Routes>
            </StyledMainContainer>
            <Footer />
            <StoreMessageBar />
        </>
    );
};

const App: FC = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyle />
                <RouterTopScroll />
                <PersistGate loading={null} persistor={persistor}>
                    <StoreApp />
                </PersistGate>
            </Router>
        </Provider>
    );
};

root.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>,
);
