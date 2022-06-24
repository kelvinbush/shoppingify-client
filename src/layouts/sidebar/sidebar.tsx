import styles from './sidebar.module.scss';
import {useAppSelector} from '../../app/hooks';
import {activeListSelector} from '../../features/added-list';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  const {activeList} = useAppSelector(activeListSelector);
  return (
    <section className={styles.sidebar}>
      <img
        src={'/img/logo.svg'}
        alt="logo"
        className={styles.sidebar__logo}
      />
      <div className={styles.sidebar__selection}>
        <NavLink to={'/shop/list'}>
          <svg className={styles.sidebar__icon}>
            <use xlinkHref={'/img/sprite.svg#icon-file-text'} />
          </svg>
        </NavLink>
        <NavLink to={'/shop/stats'}>
        <svg className={styles.sidebar__icon}>
          <use xlinkHref={'/img/sprite.svg#icon-spinner11'} />
        </svg>
        </NavLink>
        <NavLink to={'/shop/history'}>
        <svg className={styles.sidebar__icon}>
          <use xlinkHref={'/img/sprite.svg#icon-stats-dots'} />
        </svg>
        </NavLink>
      </div>
      <div className={styles.sidebar__cart}>
        <svg className={styles.sidebar__cart__icon}>
          <use xlinkHref={'/img/sprite.svg#icon-cart'} />
        </svg>
        <span className={styles.sidebar__cart__text}>
          {activeList.list.length}
        </span>
      </div>
    </section>
  );
};

export default Sidebar;
