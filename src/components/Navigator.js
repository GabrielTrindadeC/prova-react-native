import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../view/home/ Home';
import Produto from '../view/produto/ Produto';


const menuConfig = {
    initialRouteName: 'Home'
}

const menuRoutes = {
    Home,
    Produto
}

const menuNavigator = createDrawerNavigator(menuRoutes,menuConfig)
export default createAppContainer(menuNavigator)