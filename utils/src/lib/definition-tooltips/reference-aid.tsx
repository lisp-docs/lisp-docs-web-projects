import styles from './Definition Tooltips.module.css';
import DefinitionTooltips from './definition-tooltips';
import ReferenceLink from './reference-link';
/* eslint-disable-next-line */
export interface ReferenceAidProps {
    children?: React.ReactNode;
  }
  
export function ReferenceAid(props: ReferenceAidProps) {

    function getReferenceAid() {
        if (typeof props.children === "string") {
            return <DefinitionTooltips>
                <ReferenceLink>
                    {props.children}
                </ReferenceLink>
            </DefinitionTooltips>;
        } else {
            return props.children;
        }
    }

  return (
    <div className={styles['container']}>
        {getReferenceAid()}
    </div>
    );
}

export default ReferenceAid;
