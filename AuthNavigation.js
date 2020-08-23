import { createStackNavigator } from 'react-navigation-stack'
import Login from './Login'

const AuthNavigation = createStackNavigator(
    {
        Login: { screen: Login }
    },
    {
        headerMode: 'none',
        initialRouteName: 'Login'
    }
)

export default AuthNavigation