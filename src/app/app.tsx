import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello';

export default class App extends React.Component {
    render() {
        return (<Hello />);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
