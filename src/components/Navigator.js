import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Dashboard from '../view/Dashboard'
import DefaultCard from '../view/DefaultCards'
import ContentBlocks from '../view/ContentBlocks'
import Form from '../view/Form'
import PricingTables from '../view/PricingTables'


const menuConfig = {
    initialRouteName: 'PricingTables'
}

const menuRoutes = {
    Dashboard,
    DefaultCard,
    PricingTables,
    ContentBlocks,
    Form
}

const menuNavigator = createDrawerNavigator(menuRoutes,menuConfig)
export default createAppContainer(menuNavigator)