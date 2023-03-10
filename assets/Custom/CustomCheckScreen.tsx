import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import {image} from '../img/imgages';
interface CustomProps {
  label: string;
  isSelectdCheck: boolean;
  onPress?: () => void;
}
const CheckScreen: React.FC<CustomProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.viewCheck}>
        <TouchableOpacity style={styles.checkbox} onPress={props.onPress}>
          {props.isSelectdCheck ? (
            <Image
              source={image.tickLanguage}
              style={{width: 20, height: 20}}
            />
          ) : (
            <Text />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.viewLabel}>
        <Text style={styles.textLabel}>{props.label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccd0d9',
    marginBottom: 10,
    borderRadius: 70,
  },
  checkbox: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCheck: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLabel: {
    flex: 3,
  },
  textLabel: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default CheckScreen;
