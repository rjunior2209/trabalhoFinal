

import Login from './src/components/Login';
import Homed from './src/components/Homed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Homed" component={Homed} />
    </Stack.Navigator>
  </NavigationContainer>
    
  
   
  );
}


