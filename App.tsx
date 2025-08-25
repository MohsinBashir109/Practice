/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from 'react-redux';
import RootNavigation from './src/rootnavigation/RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { store } from './src/screens/Redux/slice/store/store';

function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
