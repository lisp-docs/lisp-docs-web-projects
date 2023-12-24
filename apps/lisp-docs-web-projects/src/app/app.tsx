// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { DefinitionTooltips, ReferenceAid, getLink } from '@lisp-docs/utils';

// import NxWelcome from './nx-welcome';

export function App() {

  function getDefinitionTooltips(words) {
    return words.split(" ").map((word, index) => {
      return <p key={index}><DefinitionTooltips key={index}>{word}</DefinitionTooltips></p>
    })
  }
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
      <DefinitionTooltips><p>form</p></DefinitionTooltips>
      <DefinitionTooltips><p>1</p></DefinitionTooltips>
      <DefinitionTooltips>1</DefinitionTooltips>
      <DefinitionTooltips></DefinitionTooltips>
      <DefinitionTooltips><span></span></DefinitionTooltips>
      {getDefinitionTooltips("form symbol macro 1+ + +1 1 2 3 4 5 % $ askdmawkldmalwk ")}
      
      {/* {getLink("progn")} */}
    </div>
  );
}

export default App;
