import 'react-native-gesture-handler';
import {React} from 'react';
import ContactsManager from './src/components/ContactsManager';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import DrawerNav from './src/components/Drawer';
import CalendarApp from './src/screens/Calendar';

function App() {
  return (
    //  <SafeAreaView>
    //   <DrawerNav />
    //    <Text>Hello World!</Text>
    // </SafeAreaView>
    // <Provider store={store}>
    //   <ContactsManager />
    // </Provider>
    <CalendarApp />
  );
}

export default App;
