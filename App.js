import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

export default function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowAlert(!showAlert)}
        style={{
          backgroundColor: 'blue',
          margin: 40,
          borderRadius: 10,
          width: 110,
          elevation: 10,
          padding: 10,
        }}>
        <Text style={{fontSize: 22, color: 'white'}}>Click Me</Text>
      </TouchableOpacity>
      <AwesomeAlert
        show={showAlert}

        title="This is the title"
        titleStyle={{ fontSize: 28, color:"red" }}

        message="This is the custom message"
        messageStyle={{ color:"black", fontSize: 22 }}

        showCancelButton={true}
        cancelText="Cancel"
        cancelButtonStyle={{ backgroundColor:"red", width: 80 }}
        cancelButtonTextStyle={{ fontSize: 19 }}
        onCancelPressed={() => {
          console.log('Cancel button pressed')
          setShowAlert(false)
        }}

        showConfirmButton={true}
        confirmText="Submit"
        confirmButtonStyle={{ backgroundColor:"blue", width: 85 }}
        confirmButtonTextStyle={{ fontSize: 19 }}
        onConfirmPressed={() => {
          console.log("Confirm button pressed")
          setShowAlert(false)
        }}

        // showProgress={true}
        // progressColor="red"
        // progressSize={40}

        closeOnTouchOutside={false} // default true
        closeOnHardwareBackPress={false} // default true
        onDismiss={() => console.log('Dismiss Called.')}

        customView={
          <View style={{ backgroundColor:'lightgreen', padding: 10, marginVertical: 10, borderRadius: 10 }}>
            <Text style={{ color:"green", fontSize: 16 }}>
              Custom Prop in the Alert message
            </Text>
          </View>
        }
      />
    </View>
  );
}
