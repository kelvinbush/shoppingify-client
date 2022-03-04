import React, { useState } from 'react';
import styles from './new-item.module.scss';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

const NewItem = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    note: '',
    category: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, imageUrl, category, note } = formData;
  return (
    <div className={styles.new__container}>
      <div>
        <h2>Add a new item</h2>
        <p className={styles.new__text}>Name</p>
        <input
          type="text"
          value={name}
          name={'name'}
          placeholder={'Enter an name'}
          onChange={handleInputChange}
        />
        <p className={styles.new__text}>Note(optional)</p>
        <textarea
          value={note}
          name={'note'}
          onChange={handleInputChange}
          placeholder={'Enter a note'}
        />
        <p className={styles.new__text}>Image(optional)</p>
        <input
          type="text"
          value={imageUrl}
          name={'image'}
          placeholder={'Enter a url'}
          onChange={handleInputChange}
        />
        <p className={styles.new__text}>Category</p>
        <input
          type="text"
          value={category}
          name={'category'}
          placeholder={'Enter a category'}
          onChange={handleInputChange}
        />
        <div className={styles.center__div}>
          <div className={styles.container}>
            <p className={styles.new__text}>Choose existing category </p>
            <span onClick={() => setShowDrop(!showDrop)}>
              {showDrop ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </span>
          </div>
          <ul className={styles.siblings}>
            <li className={styles.pagenav}>
              <ul className={`${showDrop ? styles.show : ''}`}>
                <li className={styles.category__item}>
                  <a href="#">List Item 1</a>
                </li>
                <li className={styles.category__item}>
                  <a href="#">List Item 2</a>
                </li>
                <li className={styles.category__item}>
                  <a href="#">List Item 3</a>
                </li>
                <li className={styles.category__item}>
                  <a href="#">List Item 4</a>
                </li>
                <li className={styles.category__item}>
                  <a href="#">List Item 4</a>
                </li>
                <li className={styles.category__item}>
                  <a href="#">List Item 4</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.new__buttons}>
        <button className={styles.new__buttons__cancel}>cancel</button>
        <button className={styles.new__buttons__save}>Save</button>
      </div>
    </div>
  );
};
export default NewItem;
