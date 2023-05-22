import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Home(){
    const [text, setText] = useState('Voce não está logado');

    async function getUser() {
        const result = await fetch('https://api.github.com/users/luizrebelatto');
        const data = await result.json();
        setText(data.name);
    }

    return (
        <SafeAreaView
            style={{
                backgroundColor: '#000',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text 
                style={{
                    color: '#fff',
                    fontSize: 18,
                    marginBottom: 10
                }}
                testID='textHome'
            >
                {text}
            </Text>
            <TouchableOpacity
                onPress={getUser }
                style={
                    {
                        height: 40,
                        width: 140,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                        borderRadius: 4
                    }
                }
            >
                <Text style={{ color: '#fff', fontSize: 18 }}>Entrar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}