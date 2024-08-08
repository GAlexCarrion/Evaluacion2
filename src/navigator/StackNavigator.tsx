import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
const Stack = createStackNavigator();

export const StackNavigator=()=>{
  return (
    <Stack.Navigator
    screenOptions={{
        cardStyle:{
            backgroundColor: '#32a90f'
        }
    }
    }>
      <Stack.Screen name="Login" component={Screen1} />    </Stack.Navigator>
  );
}