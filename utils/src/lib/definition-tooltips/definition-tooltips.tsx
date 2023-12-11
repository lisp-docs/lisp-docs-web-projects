import styles from './Definition Tooltips.module.css';
import * as glossaryJson from './glossary.json';
import { Tooltip } from 'react-tooltip';
// import ReactDOMServer from 'react-dom/server';
/* eslint-disable-next-line */
export interface DefinitionTooltipsProps {
  children?: React.ReactNode;
  term?: string;
}

interface LetterDictionary {
  [key: string]: string;
}

interface DefinitionDictionary {
  [key: string]: LetterDictionary;
}

const GLOSSARY: DefinitionDictionary = glossaryJson;

export function DefinitionTooltips(props: DefinitionTooltipsProps) {

  function getInnerString() {
    if (props.term) {
      return props.term;
    }
    let found = false;
    let curr = props.children;
    while (!found) {
      if (typeof curr === "string") {
        found = true;
        return curr;
      } else if (typeof props.children === "object" && "props" in props.children) {
        curr = props.children.props.children;
      }
    }
  }

  function isDefinition() {
    const innerString = getInnerString();
    if (typeof innerString === 'string') {
      const letterIndex = innerString[0];
      const letterDict = GLOSSARY[letterIndex];
      const found = innerString in letterDict;
      return found;
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
      console.debug(definition);
      return (
        <span
          data-tooltip-content={definition}
          data-tooltip-id={innerString}
        >
          {props.children}
          <Tooltip id={innerString} className={styles.mw40} />{' '}
        </span>
      );
    } else {
      return props.children;
    }
  }

  return <span className={styles['container']}>{getTooltip()}</span>;
}

export default DefinitionTooltips;
