import {Component} from 'react';
import largeNumber from 'largenumber-wtw/src';
import {luffy} from '../../assets/images';
import {a} from '../../modules';

import '../../stylesheets/index.less';

const NODE_ENV = process.env.NODE_ENV;
console.log('webpack emulate!!');
console.log(NODE_ENV);

class Root extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        Module: null
    };

    importDistanceCallback = () => {
        import('../../modules/distance').then((Module) => {
            console.log(Module);
            this.setState({Module});
        });
    };

    render() {
        const {
            Module
        } = this.state;
        const {
            importDistanceCallback = () => {
            }
        } = this;
        a();
        const result = largeNumber('999900000000009999999', '10');
        return <div>
            {Module ? <Module.ImportDistance/> : ''}
            {result}<br/>
            Webpack Emulate!!!!!!!!
            <img src={luffy} alt='luffy' onClick={importDistanceCallback}/>
        </div>;
    }
}

export default <Root />;

