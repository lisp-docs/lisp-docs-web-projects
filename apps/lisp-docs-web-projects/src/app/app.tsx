// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { ReferenceAid } from '@lisp-docs/utils';

// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="lisp-docs-web-projects" /> */}
      {/* <p>Hello world!</p> */}
      {/* <Utils></Utils> */}
      {/* <DefinitionTooltips>Hello World! this is a child <b>this is another child</b></DefinitionTooltips> */}
      {/* <DefinitionTooltips>string</DefinitionTooltips> */}
      <ReferenceAid>programmer</ReferenceAid  >
      <ReferenceAid >prog tag</ReferenceAid  >
      <ReferenceAid >progn</ReferenceAid >
    </div>
  );
}

export default App;
