import {useCallback, useState} from 'react';
import {createRoot} from 'react-dom/client';
import largeNumber from 'largenumber-wtw/src';
import {luffy} from '../../assets/images';
import {a} from '../../modules';

import '../../stylesheets/index.less';

const NODE_ENV = process.env.NODE_ENV;
console.log('webpack emulate!!');
console.log(NODE_ENV);

function Root() {
    a();
    const [Module, setModule] = useState(() => {});
    console.log(process.env.NODE_ENV);

    const importDistanceCallback = useCallback(() => {
        import('../../modules/distance').then((Module) => {
            setModule(Module);
        });
    }, []);
    const result = largeNumber('999900000000009999999', '10');
    return <div>
        {Module ? <Module.ImportDistance /> : ''}
        {result}<br/>
        Webpack Emulate!!!!!!!!
        <img src={luffy} alt='luffy' onClick={importDistanceCallback}/>
    </div>;
}

const root = createRoot(document.getElementById('root-webpack'));
root.render(<Root/>);

