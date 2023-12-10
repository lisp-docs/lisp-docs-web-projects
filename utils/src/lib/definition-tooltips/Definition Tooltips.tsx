import styles from './Definition Tooltips.module.css';
import * as glossaryJson from './glossary.json';
import * as dictionaryJson from './dictionary.json';
import { Tooltip } from 'react-tooltip';
// import ReactDOMServer from 'react-dom/server';
/* eslint-disable-next-line */
export interface DefinitionTooltipsProps {
  children?: React.ReactNode;
}

interface LetterDictionary {
  [key: string]: string;
}

interface DefinitionDictionary {
  [key: string]: LetterDictionary;
}

const REFERENCE_URL =
  'https://lisp-docs.github.io/cl-language-reference/docs/chap-26/';
const DICTIONARY_URL = "https://lisp-docs.github.io/cl-language-reference/";
// const DEFINITION_SOURCE = " Common Lisp Technical Reference";
// const DEFINITION_SOURCE = " https://lisp-docs.github.io/";
const GLOSSARY: DefinitionDictionary = glossaryJson;
const DICTIONARY: LetterDictionary = dictionaryJson;

export function DefinitionTooltips(props: DefinitionTooltipsProps) {
  function isDefinition() {
    if (typeof props.children === 'string') {
      const letterIndex = props.children[0];
      const letterDict = GLOSSARY[letterIndex];
      const found = props.children in letterDict;
      return found;
    } else {
      return false;
    }
  }

  function getDefinition() {
    if (isDefinition() && typeof props.children === 'string') {
      const letterIndex = props.children[0];
      const letterDict = GLOSSARY[letterIndex];
      const definition = props.children + ': ' + letterDict[props.children];
      return definition;
    } else return null;
  }

  function getDefinitionLink() {
    if (isDefinition() && typeof props.children === 'string') {
      const letterIndex = props.children[0];
      // const letterDict = GLOSSARY[letterIndex];
      // const definition = props.children + ': ' + letterDict[props.children];
      return REFERENCE_URL + letterIndex;
    } else return null;
  }

  function isDictionaryItem() {
    if (typeof props.children === 'string') {
      const found = props.children in DICTIONARY;
      return found;
    } else {
      return false;
    }
  }

  function getTooltip() {
    if (isDefinition() && typeof props.children === 'string') {
      const definition = getDefinition();
      return (
        <span
          data-tooltip-content={definition}
          data-tooltip-id={props.children}
        >
          <a href={getDefinitionLink()}>{props.children}</a>
          <Tooltip id={props.children} />{' '}
        </span>
      );
    } else if (isDictionaryItem() && typeof props.children === 'string') {
      return (<span>
        <a href={DICTIONARY_URL + DICTIONARY[props.children]}>
          {props.children}
        </a>
      </span>);
    } else {
      console.debug('not found!');
      console.debug(props.children);
      console.debug(typeof props.children);
      console.debug(glossaryJson);
      return props.children;
    }
  }

  return (
    <div className={styles['container']}>
      {/* <h1>Welcome to DefinitionTooltips!</h1> */}
      {/* <a data-tooltip-content={}></a> */}
      {/* <span>{props.children}</span> */}
      {getTooltip()}
    </div>
  );
}

export default DefinitionTooltips;
