import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './components/Header';

render(
    <Header />,
    document.getElementById('app')
);

if(module.hot){
    module.hot.accept();
}