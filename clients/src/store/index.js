import { createStore, compose ,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

<<<<<<< HEAD
const store = createStore(rootReducer, compose(applyMiddleware(thunk),))
=======
const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
>>>>>>> 931daff (BDMS Update)

export default store