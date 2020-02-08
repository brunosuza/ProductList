import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Products from './pages/Products';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'JSHunt'
            },
        },
        Products: {
            screen: Products
        },
    }, {
     defaultNavigationOptions: {
         headerTintColor: '#FFF',
         headerBackTitleVisible: false,
         headerStyle: {
             backgroundColor: '#DA552F'
         }
     },   
    })
);

export default Routes;