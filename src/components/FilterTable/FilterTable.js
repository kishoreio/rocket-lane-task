import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './filter.module.css';
import { TableContext } from '../../App';
import initialState from '../../data/initialState';
import { filter, filterData } from '../../data/filterData';

const FilterTable = () => {
  const { tableDispatch } = useContext(TableContext);
  const filterOptionToDispatch = (cat, filterType, element) => {
    // toggling the checkbox
    element.isChecked = !element.isChecked;
    //  filtering
    if (!element.isChecked) {
      const index = filter[filterType].indexOf(cat);
      if (index > -1) {
        filter[filterType].splice(index, 1);
      }
    } else {
      filter[filterType].push(cat);
    }
    tableDispatch({ type: 'TOGGLE_FILTER_ON', prop: filter, func: initialState });
  };
  // storing the filter option in local storage
  if (JSON.stringify(localStorage.getItem('filter') !== JSON.stringify(filterData))) {
    localStorage.setItem('filter', JSON.stringify(filterData));
  }
  console.log(filterData);
  //  Generate dynamic filter option
  const generateOptions = filterData.map(data => {
    return (
      <div className={style.filter} key={uuidv4()}>
        <h1 className={style.title}>{data.prop}</h1>
        {/* Generate checkbox for options */}
        {data.option.map(element => {
          return (
            <div className={style.option} key={uuidv4()}>
              <input
                type="checkbox"
                checked={element.isChecked}
                value={element.title}
                onChange={e => filterOptionToDispatch(e.target.value, data.prop, element)}
              />
              <span className={`${element.isChecked ? '' : style.strike}`}>{element.title}</span>
            </div>
          );
        })}
      </div>
    );
  });
  return (
    <div className={style.container}>
      <h1 className={style.main}>Filter By</h1>
      {generateOptions}
    </div>
  );
};

export default FilterTable;
