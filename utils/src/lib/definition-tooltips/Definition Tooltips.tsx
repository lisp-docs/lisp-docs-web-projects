import { useEffect } from 'react';
import styles from './Definition Tooltips.module.css';
import * as glossaryJson from './glossary.json';
import { Tooltip } from 'react-tooltip';
// import ReactDOMServer from 'react-dom/server';
/* eslint-disable-next-line */
export interface DefinitionTooltipsProps {
  children?: React.ReactNode
}

interface LetterDictionary {
  [key: string]: string;
}

interface DefinitionDictionary {
  [key: string]: LetterDictionary
}

const REFERENCE_URL = "https://lisp-docs.github.io/cl-language-reference/docs/chap-26/";

export function DefinitionTooltips(props: DefinitionTooltipsProps) {
  
  function getTooltip() {
    // console.debug(props.children)
    // console.debug(typeof props.children)
    const dict: DefinitionDictionary = glossaryJson;
    if(typeof props.children === "string") {
      const letterIndex = props.children[0];
      const letterDict = dict[letterIndex];
      const found = props.children in letterDict;
      if (found) {
        const definition = props.children + ": " + letterDict[props.children];
        // const tooltipHtml = <div>
        //   <p>{definition}</p>
        // </div>;
          {/* <p><a className="react-tooltip-clickable-link" href={REFERENCE_URL + letterIndex}>Source: Common Lisp Technical Reference</a></p> */}
        return <span 
            data-tooltip-content={definition}
            // data-tooltip-html={ReactDOMServer.renderToStaticMarkup(tooltipHtml)}
            // data-tooltip-delay-hide={1000}
            data-tooltip-id={props.children}
          ><a href={REFERENCE_URL + letterIndex}>
            {props.children}
          </a>
            <Tooltip id={props.children} /> </span>
      } else {
        console.error("Key Not Found! " + props.children)
        return props.children;
      }
    } else {
      console.debug("not found!")
      console.debug(props.children)
      console.debug(typeof props.children)
      console.debug(glossaryJson)
      return props.children;
    }
  }

  useEffect(() => {
    getTooltip()
  }, [])
  

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
