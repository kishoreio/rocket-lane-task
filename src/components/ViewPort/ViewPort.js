import React, { useState } from 'react';
import style from './viewport.module.css';
import Table from '../Table/Table';
import FilterTable from '../FilterTable/FilterTable';

const ViewPort = () => {
  // state to maintain filter button
  const [toggle, setToggle] = useState(false);
  //  Function to change toggle (on/off) the filter layout
  const toggleFilterTable = () => {
    setToggle(!toggle);
  };
  return (
    <div className={style.container}>
      <div className={style.section}>
        <div className={style.controller}>
          <h1>List View</h1>
          <button className={style.button} type="submit" onClick={toggleFilterTable}>
            Filter
          </button>
        </div>
        <div className={style.table}>
          <div className={`${toggle ? style.colOneToggle : style.colOne}`}>
            <Table />
          </div>
          <div className={`${toggle ? style.colTwoToggle : style.colTwo}`}>
            {/* Filter Column shows when button is toggled */}
            {toggle === true ? <FilterTable /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPort;
