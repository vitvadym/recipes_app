import useRecipe from '../../hooks/useRecipe';
import styles from './Pagination.module.css';

const Pagination = () => {
  const { currentPage, handlePage, pages } = useRecipe();

  return (
    <ul className={styles.wrapper}>
      {[...Array(pages)]?.map((_, index) => (
        <li
          onClick={() => handlePage(index)}
          className={
            currentPage === index + 1 ? styles.numberActive : styles.number
          }
          key={index}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
