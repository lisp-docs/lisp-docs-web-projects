// import styles from './Definition Tooltips.module.css';
// import * as glossaryJson from './glossary.json';
import { glossary } from './glossary';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

// import ReactDOMServer from 'react-dom/server';
/* eslint-disable-next-line */
// export interface DefinitionTooltipsProps {
//   children?: React.ReactNode;
//   term?: string;
// }

// interface LetterDictionary {
//   [key: string]: string;
// }

// interface DefinitionDictionary {
//   [key: string]: LetterDictionary;
// }

// const GLOSSARY: DefinitionDictionary = glossary();
const GLOSSARY = glossary();

// export function DefinitionTooltips(props: DefinitionTooltipsProps) {
export function DefinitionTooltips(props) {
  function getInnerString() {
    if (props.term) {
      return props.term;
    }
    let found = false;
    let curr = props.children;
    while (!found) {
      if (typeof curr === 'string') {
        found = true;
        return curr;
      } else if (
        typeof props.children === 'object' &&
        'props' in props.children
      ) {
        // this is always true...
        curr = props.children.props.children;
        if (curr === undefined) {
          found = true;
          return null;
        }
      } else {
        found = true;
        return null;
      }
    }
  }

  function isDefinition() {
    const innerString = getInnerString();
    if (typeof innerString === 'string') {
      const letterIndex = innerString[0];
      if (letterIndex in GLOSSARY) {
        const letterDict = GLOSSARY[letterIndex];
        const found = innerString in letterDict;
        return found;
      } else return false;
    } else {
      return false;
    }
  }

  function getDefinition() {
    const innerString = getInnerString();
    if (isDefinition() && typeof innerString === 'string') {
      const letterIndex = innerString[0];
      const letterDict = GLOSSARY[letterIndex];
      const definition = innerString + ': ' + letterDict[innerString];
      return definition;
    } else return null;
  }

  function getTooltip() {
    const innerString = getInnerString();
    if (isDefinition() && typeof innerString === 'string') {
      const definition = getDefinition();
      return (
          <Tippy content={<p dangerouslySetInnerHTML={{ __html: definition }} /> }>
            <span>{props.children}</span>
          </Tippy>
      );
    } else {
      return props.children;
    }
  }

  return <span>{getTooltip()}</span>;
}

export default DefinitionTooltips;
