import React from 'react';

import {Switch, Route} from 'react-router-dom';

import Landing from './Components/Landing/Landing'
import Register from './Components/Register/Register'

export default(
    <Switch>
        <Route component={Register} path='/register'/>
        <Route component={Landing} path='/' />
    </Switch>
)