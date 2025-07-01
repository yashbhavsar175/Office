import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Signature from 'react-native-signature-canvas';

export default function App() {
  const [signature, setSignature] = useState(null);

  const handleOK = (sig) => {
    console.log('Captured Signature:', sig);
    setSignature(sig);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.title}>Please Sign Below:</Text>

      <Signature
        onOK={handleOK}
        descriptionText="Sign Here"
        clearText="Clear"
        confirmText="Save"
        webStyle={`.m-signature-pad {border: 2px solid #000;}`}
      />

      {signature ? (
        <View style={{ marginTop: 20 }}>
          <Text style={{ marginBottom: 10 }}>Your Signature:</Text>
          <Image
            resizeMode="contain"
            style={{ width: '100%', height: 200, borderWidth: 1 }}
            source={{ uri: signature }}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});
