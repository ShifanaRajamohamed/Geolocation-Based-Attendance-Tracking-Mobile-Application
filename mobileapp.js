import React, { useEffect, useState } from 'react';
import { View, Text, Button, PermissionsAndroid, Alert } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const App = () => {
  const [location, setLocation] = useState(null);
  const [bleManager] = useState(new BleManager());
  const [token, setToken] = useState('user_unique_token'); // Replace with actual auth logic

  // Request permissions
  useEffect(() => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    ]);
  }, []);

  // BLE scanning
  const startScanning = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(error);
        return;
      }
      if (device && device.name === 'Office_Beacon') {
        sendCheckIn(device.id);
      }
    });
  };

  // Send Check-In Data
  const sendCheckIn = async (deviceId) => {
    Geolocation.getCurrentPosition(
      async (pos) => {
        setLocation(pos.coords);
        try {
          await axios.post('https://your-server.com/api/checkin', {
            token,
            deviceId,
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          Alert.alert('Check-in Successful');
        } catch (err) {
          console.error(err);
        }
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Geolocation Attendance App</Text>
      <Button title="Start Attendance" onPress={startScanning} />
    </View>
  );
};

export default App;
