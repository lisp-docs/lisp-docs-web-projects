import styles from './Definition Tooltips.module.css';
import * as glossaryJson from './glossary.json';
import * as dictionaryJson from './dictionary.json';
/* eslint-disable-next-line */
export interface ReferenceLinkProps {
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
const DICTIONARY_URL = 'https://lisp-docs.github.io/cl-language-reference/';
// const DEFINITION_SOURCE = " Common Lisp Technical Reference";
// const DEFINITION_SOURCE = " https://lisp-docs.github.io/";
const GLOSSARY: DefinitionDictionary = glossaryJson;
const DICTIONARY: LetterDictionary = dictionaryJson;

export function ReferenceLink(props: ReferenceLinkProps) {
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

  function getDefinitionLink() {
    if (isDefinition() && typeof props.children === 'string') {
      const letterIndex = props.children[0];
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

  function getReferenceLink() {
    if (isDictionaryItem() && typeof props.children === 'string') {
      return (
          <a href={DICTIONARY_URL + DICTIONARY[props.children]}>
            {props.children}
          </a>
      );
    } else if (isDefinition() && typeof props.children === 'string') {
      return (
          <a href={getDefinitionLink()}>{props.children}</a>
      );
    } else {
      console.error('not found!');
      console.error(props.children);
      console.error(typeof props.children);
      console.error(glossaryJson);
      return props.children;
    }
  }

  return <div className={styles['container']}>{getReferenceLink()}</div>;
}

export default ReferenceLink;
