import React from 'react';
import './Style/index.css';

interface tableProp{
  data:{
    WorkshopName: string;
  Day: string;
  Hour: string;
  StartDate: string}
  
}
const Table:React.FC<tableProp>=(props) =>{
  const { data } = props;
  return (
    <tr>
      <td>{data.WorkshopName}</td>
      <td>{data.Day}</td>
      <td>{data.Hour}</td>
      <td>{data.StartDate}</td>
    </tr>
  );
}

export default Table;
