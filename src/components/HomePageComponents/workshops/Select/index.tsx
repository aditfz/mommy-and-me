import React from 'react';
import Select from 'react-select';
import './style/index.css';
import {workshopType} from '../index'

interface selectWorkshopProp{
  value:workshopType|undefined;
  onChange:(newWorkshopSelected:any)=>void
}
const options = [
  { value: 'Music', label: 'Music' },
  { value: 'Yoga', label: 'Yoga' },
  { value: 'Swimming', label: 'Swimming' }
];

const SelectWorkshop:React.FC <selectWorkshopProp> = props => {
  const {onChange,value}=props
  return (
    <div className='container'>
      <Select value={value} onChange={onChange} options={options} />
    </div>
  );
};

export default SelectWorkshop;
