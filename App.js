import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AuthNavigation from './AuthNavigation'
import MainNavigation from './MainNavigation'

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    Main: MainNavigation,
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none'
  }
)

const App = createAppContainer(SwitchNavigator)

export default App