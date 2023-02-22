import { Layout } from './components/Layout';
import { SloganInput } from './components/SloganInput';
import styles from './App.module.scss';
import { SloganResults } from './components/SloganResults';
import { Features } from './components/Features';
import { Products } from './components/Products';

function App() {
  return (
    <Layout>
      <main>
        <div className={styles['wrapper']}>
          <SloganInput />
          <SloganResults />
        </div>
      </main>
      <Features />
      <Products />
    </Layout>
  );
}

export default App;
