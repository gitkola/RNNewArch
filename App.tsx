import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: 'teal',
            flex: 1,
          }}>
          <Text style={{fontSize: 18}}>{__DEV__ ? 'DEBUG' : 'RELEASE'}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
