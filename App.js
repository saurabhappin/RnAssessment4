import 'react-native-gesture-handler';
import {React} from 'react';
import ContactsManager from './src/ContactsManager';
import {Provider} from 'react-redux';
import store from './src/ReduxHandler.js/store';

function App() {
  return (
    // <SafeAreaView>
    //   {/* <DrawerNav /> */}
    //   <Text>Hello World!</Text>
    // </SafeAreaView>
    <Provider store={store}>
      <ContactsManager />
    </Provider>
  );
}

export default App;
