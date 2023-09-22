import React from 'react';
import { StyleSheet, } from 'react-native';
import AppNavigator from './AppNavigator';
import Main from './screen/Main';
import { Provider } from 'react-redux';
import { mystore } from './redux/MyStore';

function App(): JSX.Element {

  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
}

const styles = StyleSheet.create({

})

export default App;
