import React from 'react';
import { View, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';

type StyledViewProps = ViewProps & {
  children?: React.ReactNode;
};

const StyledView: React.FC<StyledViewProps> = ({ children, style, ...props }) => {
  return (
    <View
    "
      style={styles.container}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        color:'black',
        borderRadius: 16,
        padding: 4,
    }
})

export default StyledView;
