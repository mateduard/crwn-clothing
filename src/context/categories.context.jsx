import { createContext, useState, useEffect } from 'react';

import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from '../utils/firebase/firebase.utils.jsx';

// import SHOP_DATA from '../shopdata.js'; // COMMENTURILE S-AU FOLOSIT DOAR O DATA ATUNCI CAND S-AU ADAUGAT DATELE IN FIREBASE DIN FISIER JS CA SA NU LE ADAUGAM MANUAL!!

export const CategoriesContext = createContext({
  categoriesMap: null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({}); // valoarea initiala
  /*useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA);
  }, []); */

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
