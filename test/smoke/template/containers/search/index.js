import {createRoot} from 'react-dom/client';
import {a} from '../../modules';

function Search() {
    a();
    return <div>
        search div!!!
    </div>
}

const root = createRoot(document.getElementById('root'));
root.render(<Search/>);