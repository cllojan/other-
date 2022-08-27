import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator.js'
import AudioProvider from './app/context/AudioProvider.js';
export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <AppNavigator></AppNavigator>
      </NavigationContainer>
    </AudioProvider>
    
  );
}

