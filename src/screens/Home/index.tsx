import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';

export default function Home(){
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
            >
                Voce não está logado!
            </Text>
            <TouchableOpacity
                style={[
                    {
                        height: 40,
                        width: 140,
                        backgroundColor: 'red',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                        borderRadius: 4
                    }
                ]}
            >
                <Text style={{ color: '#fff', fontSize: 18 }}>Entrar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}