import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import logger from 'redux-logger'
import { CreateJumpstateMiddleware } from 'jumpstate'

import { StatementsState } from '../Statement/reducer'
import { VideoState } from '../Video/reducer'
import { PlaybackState } from './playback_reducer'
import { InterfaceState } from './interface_reducer'


// Declare reducers
const reducers = combineReducers({
  Video: VideoState,
  Statements: StatementsState,
  Interface: InterfaceState,
  Playback: PlaybackState
})


// Declare middlewares
const middlewares = [
  CreateJumpstateMiddleware(),
  // logger  // Uncomment to log redux actions
]


// Build store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  reducers, composeEnhancers(applyMiddleware(...middlewares))
)
