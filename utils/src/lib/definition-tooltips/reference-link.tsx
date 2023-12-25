// import styles from './Definition Tooltips.module.css';
// import * as glossaryJson from './glossary.json';
// import * as dictionaryJson from './dictionary.json';
import { glossary } from './glossary';
import { dictionary } from './dictionary';
// import { Link } from 'react-router-dom';
// import * as dcr from '@docusaurus/core';
/* eslint-disable-next-line */
export interface ReferenceLinkProps {
  children?: React.ReactNode;
}

// console.debug(dcr);

interface LetterDictionary {
  [key: string]: string;
}

interface DefinitionDictionary {
  [key: string]: LetterDictionary;
}

const REFERENCE_URL =
  'https://lisp-docs.github.io/cl-language-reference/chap-26/';
const LOCAL_DEFINITION = '/chap-26/';
const DICTIONARY_URL = 'https://lisp-docs.github.io/cl-language-reference/';
const GLOSSARY: DefinitionDictionary = glossary();
const DICTIONARY: LetterDictionary = dictionary();

export function isDefinition(children) {
  if (typeof children === 'string') {
    const letterIndex = children[0];
    if (letterIndex in GLOSSARY) {
      const letterDict = GLOSSARY[letterIndex];
      const found = children in letterDict;
      return found;
    } else return false;
  } else {
    return false;
  }
}

export function isLocal() {
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  const localOrigin =
    origin.indexOf('localhost') !== -1 ||
    origin.indexOf('https://lisp-docs.github.io') !== -1;
  const localPathname = pathname.indexOf('cl-language-reference') !== -1;
  return localOrigin && localPathname;
}

export function getDefinitionLink(children) {
  if (isDefinition(children) && typeof children === 'string') {
    const letterIndex = children[0];
    // const localPathname = true;
    if (isLocal()) {
      return LOCAL_DEFINITION + letterIndex;
    } else {
      return REFERENCE_URL + letterIndex;
    }
  } else return null;
}

export function isDictionaryItem(children) {
  if (typeof children === 'string') {
    const found = children in DICTIONARY;
    return found;
  } else {
    return false;
  }
}

export function getDictionaryLink(children) {
  if (typeof children === 'string' && children in DICTIONARY) {
    if (isLocal()) {
      return '/' + DICTIONARY[children];
    } else return DICTIONARY_URL + DICTIONARY[children];
  } else {
    return null;
  }
}

export function getLink(children) {
  if (isDictionaryItem(children) && typeof children === 'string') {
    return getDictionaryLink(children);
  } else if (isDefinition(children) && typeof children === 'string') {
    return getDefinitionLink(children);
  } else {
    return null;
  }
}
// export function ReferenceLink(props: ReferenceLinkProps) {

//   function getReferenceLink() {
//     if (isDictionaryItem(props.children) && typeof props.children === 'string') {
//       return (
//         <Link to={getDictionaryLink(props.children)}>
//           {props.children}
//         </Link>
//       );
//     } else if (isDefinition(props.children) && typeof props.children === 'string') {
//       return <Link to={getDefinitionLink(props.children)}>{props.children}</Link>;
//     } else {
//       return props.children;
//     }
//   }

//   return <span className={styles['container']}>{getReferenceLink()}</span>;
// }

// export default ReferenceLink;
