import React from 'react';
import NewCategoryInput from '../components/NewCategoryInput';
import CategoryItem from '../components/CategoryItem';

const CategoryContainer = (props) => {
  const categoryList = props.categories.map((item, index) => <CategoryItem category={item} deleteCategory={props.deleteCategory} key={index} colorScheme={props.colorScheme} />);

  return (
    <div>
      <NewCategoryInput addCategory={props.addCategory} onCategoryInputChange={props.onCategoryInputChange} categoryInputContent={props.categoryInputContent} />
      <h2>Categories</h2>
      <ul>
        {categoryList}
      </ul>
    </div>
  );
};

export default CategoryContainer;
