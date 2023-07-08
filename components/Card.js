import { StyleSheet, View, Text, Image } from 'react-native';

export default function Card(props) {

    let fullName = props.firstName + " " + props.lastName

    return (
        <View style={styles.card}>
            <View>
                <Image
                    source={{ uri: props.avatar }}
                    style={styles.image} />
            </View>
            <View>
                <Text style={styles.labelNama}>{fullName}</Text>
                <Text style={styles.labelEmail}>{props.email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 18,
    },
    labelNama: {
        fontSize: 16,
        fontWeight: "bold",
    },
    labelEmail: {
        fontSize: 14,
    },
});
