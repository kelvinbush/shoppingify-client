import styles from './home.module.scss';
import Sidebar from '../sidebar/sidebar';
import MainContent from '../main-content/main_content';
import ItemSection from '../item-section/item_section';
import Details from '../../components/details/details';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
      <Details />
    </div>
  );
}
