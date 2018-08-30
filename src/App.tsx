import * as React from 'react';

import * as style from './App.scss';

export interface AppProps { name: string; }

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <h1 className={style.hello} >Hello {this.props.name}</h1>
        );
    }
}