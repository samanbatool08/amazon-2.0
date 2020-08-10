// setup data layer 

import React, { createContext, useContext, useReducer } from 'react';
import { Children } from 'react';

export const StateContext = createContext();

// provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);