import React, { useState } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data';

const Add = ({ navigation }) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('Vowels');

    return (
        <View style={{ padding: 20 }}>
            {/* Letter Input */}
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Letter:</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 8,
                        borderRadius: 5,
                    }}
                    onChangeText={(text) => setLetter(text)}
                />
            </View>

            {/* Dropdown Picker for Type */}
            <View style={{ marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Type:</Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'Vowels', value: 'Vowels' },
                        { label: 'Consonants', value: 'Consonants' },
                    ]}
                    style={{
                        inputIOS: {
                            borderWidth: 1,
                            borderColor: '#ccc',
                            padding: 10,
                            borderRadius: 5,
                            backgroundColor: '#f9f9f9',
                        },
                        inputAndroid: {
                            borderWidth: 1,
                            borderColor: '#ccc',
                            padding: 10,
                            borderRadius: 5,
                            backgroundColor: '#f9f9f9',
                        },
                    }}
                />
            </View>

            {/* Submit Button */}
            <Button
                title="Submit"
                onPress={() => {
                    const item = { key: letter };
                    let indexNum = type === 'Vowels' ? 0 : 1;
                    datasource[indexNum].data.push(item);
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
};

export default Add;
