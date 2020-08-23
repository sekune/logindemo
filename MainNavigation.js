import { createStackNavigator } from 'react-navigation-stack'
import Main from './Main'

const MainNavigation = createStackNavigator(
    {
        Main: { screen: Main }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Main'
    }
)

export default MainNavigation