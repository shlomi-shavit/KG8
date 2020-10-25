import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// Styles
import classes from './grocery-page.module.scss';

// Components
import SideNavigation from '../../component/side-navigation/side-navigation';
import SelectedPage from '../../component/selected-page/selected-page';

const GroceryPage = () => {

    return (
        <div className={classes.page_container}>
            <Router>
                <SideNavigation />
                <SelectedPage />
            </Router>
        </div>
    );
};

export default GroceryPage;
