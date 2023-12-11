import styles from './Definition Tooltips.module.css';
import * as glossaryJson from './glossary.json';
import * as dictionaryJson from './dictionary.json';
import { Link } from 'react-router-dom';
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
const LOCAL_DEFINITION = '/docs/chap-26/';
const DICTIONARY_URL = 'https://lisp-docs.github.io/cl-language-reference/';
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

  function isLocal() {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    const localOrigin =
      origin.indexOf('localhost') !== -1 ||
      origin.indexOf('https://lisp-docs.github.io') !== -1;
    const localPathname = pathname.indexOf('cl-language-reference') !== -1;
    return localOrigin && localPathname
  }

  function getDefinitionLink() {
    if (isDefinition() && typeof props.children === 'string') {
      const letterIndex = props.children[0];
      // const localPathname = true;
      if (isLocal()) {
        return LOCAL_DEFINITION + letterIndex;
      } else {
        return REFERENCE_URL + letterIndex;
      }
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

  function getDictionaryLink() {
    if (typeof props.children === 'string' && props.children in DICTIONARY) {
        if (isLocal()) {
            return DICTIONARY[props.children]
        } else return DICTIONARY_URL + DICTIONARY[props.children];
      } else {
        return null;
      }
  }

  function getReferenceLink() {
    if (isDictionaryItem() && typeof props.children === 'string') {
      return (
        <Link to={getDictionaryLink()}>
          {props.children}
        </Link>
      );
    } else if (isDefinition() && typeof props.children === 'string') {
      return <Link to={getDefinitionLink()}>{props.children}</Link>;
    } else {
      return props.children;
    }
  }

  return <span className={styles['container']}>{getReferenceLink()}</span>;
}

export default ReferenceLink;
