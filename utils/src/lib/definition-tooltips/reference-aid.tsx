import styles from './Definition Tooltips.module.css';
import DefinitionTooltips from './definition-tooltips';
// import ReferenceLink from './reference-link';
/* eslint-disable-next-line */
export interface ReferenceAidProps {
  children?: React.ReactNode;
}

export function ReferenceAid(props: ReferenceAidProps) {
  function getReferenceAid() {
    if (typeof props.children === 'string') {
      return (
        <DefinitionTooltips>
            {props.children}
        </DefinitionTooltips>
      );
    } else {
      return props.children;
    }
  }

  return <span className={styles['container']}>{getReferenceAid()}</span>;
}

export default ReferenceAid;
