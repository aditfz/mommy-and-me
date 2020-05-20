import React from 'react';
import Table from './table';
import './style/index.css';
import workshops from '../../../../constants/Workshops';
import {classType} from '../index'
interface buildTableProp{
  classes:{
    Music:number
    Yoga:number
    Swimming:number
  }
}
const BuildTable:React.FC<buildTableProp> = (props) => {
  const allClassType=Object.keys(props.classes) as Array<classType>
  let transformedclasses = allClassType 
    .map((clas) => {
      return [...Array(props.classes[clas ])].map((_, i) => {
        return <Table key={clas + i} data={workshops[clas]} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
 

  return (
    <div className='doS'>
      <table>
        <tr>
          <td>WorkshopName</td>
          <td>Day</td>
          <td>Hour</td>
          <td>StartDate</td>
        </tr>
        
        {transformedclasses.length===0?<p>Please start adding your favorite classes</p>:transformedclasses}
      </table>
    </div>
  );
};
export default BuildTable;
