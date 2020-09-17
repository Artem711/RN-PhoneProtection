// PLUGINS IMPORTS //
import React, {useRef} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '~/Content/Shared/Components/Text/Text';
import {RNCamera} from 'react-native-camera';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////
type PropsType = {
  setImageBlob: (newImageBlob: Blob) => void;
  setImageURI: (newImageURI: string) => void;
};
const PhotoScreen: React.FC<PropsType> = (props) => {
  const camera = useRef(null);

  const takePicture = async () => {
    if (camera && camera.current) {
      const options = {quality: 0.5, base64: true};
      // @ts-ignore
      const data = await camera.current?.takePictureAsync(options);
      props.setImageURI(data.uri);
      const photo = await fetch(data.uri);
      const blob = await photo.blob();
      props.setImageBlob(blob);
    }
  };
  return (
    <View style={styles.wrapper}>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}>
        <View style={styles.border} />
      </RNCamera>
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture} style={styles.capture}>
          <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },

  border: {
    borderWidth: 2,
    borderColor: '#00DE09',
    position: 'absolute',
    height: '75%',
    width: '75%',
    borderStyle: 'dashed',
    borderRadius: 12,
  },
});

export default React.memo(PhotoScreen);
