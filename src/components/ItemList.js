import React, {PropTypes} from 'react'
import {ListView, Text, View} from 'react-native'
import {connect} from 'react-redux'
import {deleteItem} from '../actions'
import Swipeout from 'react-native-swipeout';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

const getItems = (items) => {
    return items.filter(t => !t.removed)
}

const ItemList = ({items, dispatch}) => {
    let scrollEnabled = true;

    const _allowScroll = (enabled) => {
        scrollEnabled = enabled
    }

    const _renderRow = (rowData) => {
        let swipeoutBtns = [
            {
                text: 'Delete',
                'type': 'delete',
                onPress: () => {
                    dispatch(deleteItem(rowData.id))
                }
            }
        ]

        return (
            <Swipeout
                right={swipeoutBtns}
                rowID={rowData.id}
                scroll={(event) => _allowScroll(event)}
                autoClose={true}
                >
                <View style={{marginHorizontal: 15, marginVertical: 20 }}>
                    <Text>{rowData.text}</Text>
                </View>
            </Swipeout>
        )
    }

    const _renderSeperator = (sectionID, rowID, adjacentRowHighlighted) => {
        <View key={`${sectionID}-${rowID}`} style={{backgroundColor: '#FFFFFF', height: 5}} />
    }

    return (
        <ListView
            style={{ flex: 1, marginLeft: 25, marginRight: 25, height: 250 }}
            dataSource={items}
            renderRow={(rowData) => _renderRow(rowData) }
            scrollEnabled={scrollEnabled}
            enableEmptySections={true}
            showsVerticalScrollIndicator={true}
            renderSeparator={(sectionID, rowID) => _renderSeperator(sectionID, rowID)}
            />
    )

}

const mapStateToProps = (state) => {
    return {
        items: ds.cloneWithRows(getItems(state.items))
    }
}

ItemList.propTypes = {
    items: PropTypes.object.isRequired
}

ItemList = connect(mapStateToProps)(ItemList)

export default ItemList