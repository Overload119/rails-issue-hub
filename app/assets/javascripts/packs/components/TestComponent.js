// @flow

import * as React from 'react';
import {useState} from 'react';
import Turbolinks from 'turbolinks';

function TestComponent(): React.Node {
  const [v, setV] = useState(1);

  return (
    <div onClick={() => setV(v + 1)}>
      Hello World! {v}
      <div
        onClick={() => {
          Turbolinks.visit(Routes.another_page_path());
        }}>
        Visit Another Page
      </div>
    </div>
  );
}

type Props = {};
export default (props: Props, railsContext: any): (() => React.Node) => {
  return () => <TestComponent {...{props, ...railsContext}} />;
};
