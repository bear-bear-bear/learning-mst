import * as React from 'react';

import { observer } from 'mobx-react';

interface Props {
  title?: string;
  finished?: boolean;
  toggle: () => void;
  remove: () => void;
}

const Todo: React.FC<Props> = observer(
  ({ title, finished, toggle, remove }) => {
    return (
      <li>
        <input type="checkbox" checked={!!finished} onChange={toggle} />
        {title}
        <button onClick={remove}>X</button>
      </li>
    );
  },
);

export default Todo;
