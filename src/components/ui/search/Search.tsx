import { FC } from 'react';
import styles from './AppSearch.module.scss';
import { Search } from 'lucide-react';

const AppSearch: FC = () => {
  return (
    <form className={styles.search_container}>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className={styles.input}
          placeholder="Search . . ."
          required
        />
        <button type="submit" className={styles.button}>
          <Search />
        </button>
      </div>
    </form>
  );
};

export default AppSearch;
