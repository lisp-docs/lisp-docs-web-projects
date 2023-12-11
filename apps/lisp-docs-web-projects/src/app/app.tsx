// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { DefinitionTooltips, ReferenceAid, getLink } from '@lisp-docs/utils';

// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="lisp-docs-web-projects" /> */}
      {/* <p>Hello world!</p> */}
      {/* <Utils></Utils> */}
      {/* <DefinitionTooltips>Hello World! this is a child <b>this is another child</b></DefinitionTooltips> */}
      {/* <DefinitionTooltips>string</DefinitionTooltips> */}
      
      <a href={getLink("programmer")}>
        <ReferenceAid>programmer</ReferenceAid  >
      </a>
      <br />
      <a href={getLink("prog tag")}>
        <ReferenceAid>prog tag</ReferenceAid  >
      </a>
      <br />
      
      {/* <ReferenceAid >prog tag</ReferenceAid  > */}
      {/* <ReferenceAid >progn</ReferenceAid > */}
      <a href={getLink("progn")}>
        <ReferenceAid>progn</ReferenceAid  >
      </a>
      <br />
      <DefinitionTooltips>form</DefinitionTooltips>
      {/* {getLink("progn")} */}
    </div>
  );
}

export default App;
