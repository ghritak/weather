import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

const TopSheet = ({ children, visible, handleToggleTopSheet, }) => {
    const [animation] = useState(new Animated.Value(0));
    const [sheetHeight, setSheetHeight] = useState(0);

    useEffect(() => {
        if (visible) {
            Animated.spring(animation, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }
    }, [visible]);

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-sheetHeight, 0],
    });

    const handleOnLayout = event => {
        setSheetHeight(event.nativeEvent.layout.height);
    };

    if (!visible) return null;

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.sheet, { transform: [{ translateY }] }]}
                onLayout={handleOnLayout}
            >
                {children}
            </Animated.View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // overflow: 'hidden',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        zIndex: 1000,
    },
    sheet: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        // borderBottomWidth: 2,
        padding: 20,
        paddingTop: 10,
        paddingBottom: 0,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 11 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
});

export default TopSheet;
