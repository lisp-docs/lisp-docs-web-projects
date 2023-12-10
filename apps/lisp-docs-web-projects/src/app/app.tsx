// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { DefinitionTooltips } from '@lisp-docs/utils';

// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="lisp-docs-web-projects" /> */}
      {/* <p>Hello world!</p> */}
      {/* <Utils></Utils> */}
      {/* <DefinitionTooltips>Hello World! this is a child <b>this is another child</b></DefinitionTooltips> */}
      {/* <DefinitionTooltips>progn</DefinitionTooltips> */}
      <DefinitionTooltips>programmer</DefinitionTooltips>
      <DefinitionTooltips>prog tag</DefinitionTooltips>
      <DefinitionTooltips>progn</DefinitionTooltips>
    </div>
  );
}

export default App;
