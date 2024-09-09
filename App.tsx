import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Repos from './src/screens/Repos/';
import Users from './src/screens/Users/';
import Home from './src/screens/Home/';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen name="Repos" component={Repos} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
