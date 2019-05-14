'use strict';

import React, { Component } from 'react';
import './assets/css/styles.scss';

import PercentageBarHorizontal from '~/components/percentage/bar-horizontal';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <PercentageBarHorizontal
                    items={[
                        { label: 'Lorem', value: 65, colour: '#5C313B' },
                        { label: 'Ipsum', value: 35, colour: '#9A6A60' }
                    ]}
                />
            </>
        );
    }
}

export default App;