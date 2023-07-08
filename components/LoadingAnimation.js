import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { ActivityIndicator } from 'react-native-paper';

const LoadingAnimation = () => {
    return (
        <View style={styles.indicatorWrapper}>
            {/* <ActivityIndicator size="large" style={styles.indicator} color='#0782f9' /> */}
            <LoadingAnimation />
            <Text style={styles.indicatorText}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    indicatorWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {},
    indicatorText: {
        fontSize: 18,
        marginTop: 12,
    },
});

export default LoadingAnimation;