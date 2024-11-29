import React from 'react';
import {
    StatusBar,
    Button,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { datasource } from './Data';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#f9f9f9',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

const Home = ({ navigation }) => {
    // Render each item in the SectionList
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() =>
                    navigation.navigate('Edit', {
                        index: index,
                        type: section.title,
                        key: item.key,
                    })
                }
            >
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <StatusBar />

            {/* Add Letter Button */}
            <Button
                title="Add Letter"
                onPress={() => {
                    navigation.navigate('Add');
                }}
            />

            {/* Section List */}
            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => `${index}`}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text
                        style={[
                            styles.headerText,
                            { backgroundColor: bgcolor || '#007bff' },
                        ]}
                    >
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

export default Home;
