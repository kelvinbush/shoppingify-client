import styles from './home.module.scss';
import Sidebar from '../sidebar/sidebar';
import MainContent from '../main-content/main_content';
import ItemSection from '../item-section/item_section';
import Details from '../../components/details/details';
import { useAppSelector } from '../../app/hooks';
import {
  DetailState,
  displaySelector,
} from '../../features/details-display-state';

export default function HomePage() {
  const { screen } = useAppSelector(displaySelector);
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
      {screen === DetailState.details ? <Details /> : <ItemSection />}
    </div>
  );
}
