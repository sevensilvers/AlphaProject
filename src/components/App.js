import React, {Component} from 'react'
import {View, Text} from 'react-native'
import AddItem from '../components/AddItem'
import ItemList from './ItemList'

const App = () => {
    return (
        <View>
            <AddItem />
            <ItemList />
        </View>
    )
}

export default App