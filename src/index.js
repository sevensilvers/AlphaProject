import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { itemApp } from './reducers'
import App from './components/App'

let store = createStore(itemApp);

const Main = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default Main