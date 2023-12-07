// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { LispDocsUtils } from '@lisp-docs/utils';

// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="lisp-docs-web-projects" /> */}
      <p>Hello world!</p>
      <LispDocsUtils></LispDocsUtils>
    </div>
  );
}

export default App;
