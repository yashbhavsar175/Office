import React, { useState } from 'react';
import { View, Image, Button, TextInput, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import SignatureScreen from 'react-native-signature-canvas';
import ImageEditor from '@react-native-community/image-editor';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ImageEditorScreen = () => {
  const [image, setImage] = useState(null);
  const [drawing, setDrawing] = useState(null);
  const [text, setText] = useState('');
  const [textPosition, setTextPosition] = useState({ x: 100, y: 100 });
  const [cropImageUri, setCropImageUri] = useState(null);

  const { top, bottom } = useSafeAreaInsets();

  const openGallery = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handleSignature = (signature) => {
    setDrawing(signature);  // Store the signature/drawing as base64 image
  };

  const cropImage = () => {
    const cropData = {
      offset: { x: 0, y: 0 },
      size: { width: 200, height: 200 },
    };

    ImageEditor.cropImage(image, cropData)
      .then((croppedUri) => {
        setImage(croppedUri);
        setCropImageUri(croppedUri); // Save cropped image
      })
      .catch((error) => console.log('Error cropping image:', error));
  };

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleTextPositionChange = (e) => {
    setTextPosition({ x: e.nativeEvent.locationX, y: e.nativeEvent.locationY });
  };

  return (
    <View style={[styles.container, { paddingTop: top, paddingBottom: bottom }]}>
      <View style={styles.imageContainer}>
        {image && (
          <Image
            source={{ uri: image }}
            style={styles.image}
            resizeMode="contain"
          />
        )}

        {drawing && (
          <Image
            source={{ uri: drawing }}
            style={[styles.drawing, { position: 'absolute' }]}
            resizeMode="contain"
          />
        )}
      </View>

      <TextInput
        value={text}
        onChangeText={handleTextChange}
        placeholder="Add Text Here"
        placeholderTextColor="#bbb"
        style={styles.textInput}
      />

      <Text
        style={[styles.textOverlay, { left: textPosition.x, top: textPosition.y }]}
        onStartShouldSetResponder={handleTextPositionChange}
      >
        {text}
      </Text>

      <SignatureScreen
        onOK={handleSignature}
        webStyle={styles.signatureWebStyle}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openGallery}>
          <Text style={styles.buttonText}>Pick Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={cropImage}>
          <Text style={styles.buttonText}>Crop Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  drawing: {
    width: '100%',
    height: '100%',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  textOverlay: {
    position: 'absolute',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  signatureWebStyle: {
    '.m-signature-pad--footer': { display: 'none' },
    '.m-signature-pad': { border: 'none', height: '100%' },
    '.m-signature-pad--body': { backgroundColor: 'transparent' },
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ImageEditorScreen;
