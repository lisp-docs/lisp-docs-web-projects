import styles from './Definition Tooltips.module.css';

/* eslint-disable-next-line */
export interface DefinitionTooltipsProps {
  children?: React.ReactNode
}

export function DefinitionTooltips(props: DefinitionTooltipsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DefinitionTooltips!</h1>
      <span>{props.children}</span>
      
    </div>
  );
}

export default DefinitionTooltips;
