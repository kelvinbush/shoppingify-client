import React, { useState } from 'react';
import styles from './new-item.module.scss';

const NewItem = () => {
  const [formData, setFormData] = useState({
    name: '',
    imageUrl: '',
    note: '',
    category: '',
  });

  const handleInputChange = (e: any) => {};

  const { name, imageUrl, category, note } = formData;
  return (
    <div className={styles.new__container}>
      <h2>Add a new item</h2>
      <p>Name</p>
      <input
        type="text"
        value={name}
        name={'name'}
        placeholder={'Enter an name'}
        onChange={handleInputChange}
      />
      <p>Note(optional)</p>
      <textarea
        value={note}
        name={'note'}
        onChange={handleInputChange}
        placeholder={'Enter a note'}
      />
      <p>Image(optional)</p>
      <input
        type="text"
        value={imageUrl}
        name={'image'}
        placeholder={'Enter a url'}
        onChange={handleInputChange}
      />
      <p>Category</p>
      <input
        type="text"
        value={category}
        name={'category'}
        placeholder={'Enter a category'}
        onChange={handleInputChange}
      />
    </div>
  );
};
export default NewItem;
