import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Todos from './components/Todos';

const root = createRoot(document.getElementById('root'));
root.render(<Todos />);
