import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key);

    return (
        <View style={{ padding: 20 }}>
            {/* Letter Input */}
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Letter:</Text>
                <TextInput
                    value={letter}
                    maxLength={1}
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 8,
                        borderRadius: 5,
                    }}
                    onChangeText={(text) => setLetter(text)}
                />
            </View>

            {/* Save and Delete Buttons */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {/* Save Button */}
                <Button
                    title="Save"
                    onPress={() => {
                        let indexNum = route.params.type === 'Vowels' ? 0 : 1;
                        datasource[indexNum].data[route.params.index].key = letter;
                        navigation.navigate('Home');
                    }}
                />

                {/* Delete Button */}
                <Button
                    title="Delete"
                    color="red"
                    onPress={() => {
                        let indexNum = route.params.type === 'Vowels' ? 0 : 1;
                        Alert.alert(
                            'Are you sure?',
                            '',
                            [
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        datasource[indexNum].data.splice(route.params.index, 1);
                                        navigation.navigate('Home');
                                    },
                                },
                                { text: 'No' },
                            ]
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default Edit;
