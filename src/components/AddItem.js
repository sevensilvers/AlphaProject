import React from 'react'
import {TextInput, TouchableNativeFeedback, TouchableHighlight, View, Text, Platform} from 'react-native'
import { connect } from 'react-redux'
import { addItem } from '../actions'


let AddItem = ({dispatch}) => {
    let input

    let TouchableElement = TouchableHighlight;
    if (Platform.OS == 'android') {
        TouchableElement = TouchableNativeFeedback
    }

    let _callAddItem = () => {
        if (!input) {
            alert('Please enter any character on the input box')
            return false
        }

        dispatch(addItem(input));
        clearText()
    }

    let _callChangeText = (text) => {
        input = text;
    }

    clearText = () => {
        _textInput.setNativeProps({ text: '' })
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'stretch', flex: 1, justifyContent: 'center', marginTop: 25, marginBottom: 50 }}>
            <View style={{width: 200}}>
                <TextInput
                    ref={component => _textInput = component}
                    onChangeText={_callChangeText}
                    value={input}
                    onSubmitEditing={_callAddItem}
                    style={{flex:1,backgroundColor:'#ededed',height:47}}
                    />
            </View>
            <View>
                <TouchableElement
                    onPress={_callAddItem}
                    >
                    <View style={{backgroundColor: 'gray' }}>
                        <Text style={{ margin: 15, color: 'white' }}>Add</Text>
                    </View>
                </TouchableElement>
            </View>
        </View>
    )
}
AddItem = connect()(AddItem)

export default AddItem