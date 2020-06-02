import React, { useContext, useRef } from 'react';
import style from './table.module.css';
import { TableContext } from '../../App';
import { filter } from '../../data/filterData';

const Table = () => {
  const { local, schema, tableDispatch } = useContext(TableContext);
  const sorts = ['SORT_TABLE_BY_ASC', 'SORT_TABLE_BY_DESC', 'SORT_TABLE_BY_DEFAULT'];
  let sortType = null;
  // useRef to retain previous sorts index
  const sortIndex = useRef({ sortType: '', index: 0 });
  //  Calling sort dispatch to sort data
  const sortTable = (e, isTrue) => {
    if (isTrue === true) {
      const convertStr = e.target.innerText.split(' ').join('');
      const sortText = `${convertStr.charAt(0).toLowerCase()}${convertStr.slice(1)}`;
      sortType = sorts[sortIndex.current.index];
      sortIndex.current.sortType = sortType;
      if (sortIndex.current.index >= 2) {
        sortIndex.current.index = 0;
      } else {
        sortIndex.current.index += 1;
      }
      tableDispatch({ type: sortType, text: sortText, filter });
    }
  };
  //  Generate dynamic table heading from schema array
  const generateTableHead = schema.map(col => {
    return (
      <th key={col.id}>
        <div className={style.group}>
          <button type="submit" onClick={e => sortTable(e, col.sortable)} className={style.button}>
            {col.schemaName}
          </button>
          {/* changing the sort icon */}
          <span className={style.icon}>
            {sortIndex.current.sortType === sorts[0] ? '⇩' : sortIndex.current.sortType === sorts[1] ? '⇧' : '⇨'}
          </span>
        </div>
        {/* condition to enable cannot sort text */}
        {col.sortable ? null : <span className={style.text}>(cannot sort)</span>}
      </th>
    );
  });
  //  Generate dynamic table row from data array
  const generateTableRow = local.map(row => {
    return (
      <tr key={row.id}>
        <td>{row.name}</td>
        <td>{row.userName}</td>
        <td>{row.age}</td>
        <td>{row.gender}</td>
        <td>{row.eMail}</td>
        <td>{row.occupation}</td>
        <td>{row.martialStatus}</td>
        <td>{row.state}</td>
        <td>{row.country}</td>
      </tr>
    );
  });
  return (
    <table className={style.table}>
      <thead>
        <tr>{generateTableHead}</tr>
      </thead>
      <tbody>{generateTableRow}</tbody>
    </table>
  );
};

export default Table;
