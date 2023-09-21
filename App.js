import 'react-native-gesture-handler';
import {React, useEffect} from 'react';
import PushNotification from 'react-native-push-notification';
import ContactsManager from './src/components/ContactsManager';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import DrawerNav from './src/components/Drawer';
import CalendarApp from './src/screens/Calendar';
import RemotePushController from './src/components/Firebase';

function App() {
  // useEffect(() => {
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     onRegister: function (token) {
  //       console.log('TOKEN:', token);
  //     },
  //     // (required) Called when a remote or local notification is opened or received
  //     onNotification: function (notification) {
  //       console.log('REMOTE NOTIFICATION ==>', notification);
  //       // process the notification here
  //     },
  //     // Android only: GCM or FCM Sender ID
  //     senderID: '516109807065',
  //     popInitialNotification: true,
  //     requestPermissions: true,
  //   });
  // }, []);
  return (
    //  <SafeAreaView>
    //   <DrawerNav />
    //    <Text>Hello World!</Text>
    // </SafeAreaView>
    <Provider store={store}>
      <ContactsManager />
    </Provider>
    // <>
    //   <CalendarApp />
    //   <RemotePushController />
    // </>
  );
}

export default App;
