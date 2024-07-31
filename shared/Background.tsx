
import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const Background = ({ children }:any) => {
  return (
    <ImageBackground
    source={require(`../assets/bgImg.png`)}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Background;
