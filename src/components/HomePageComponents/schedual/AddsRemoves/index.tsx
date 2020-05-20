import React from 'react';
import './style/index.css';
import AddRemove from './addRemove';
import {classType} from '../index'
const controls = [
  { label: <p className='label1'>Music</p>, type: 'Music' },
  { label: <p className='label2'>Yoga</p>, type: 'Yoga' },
  { label: <p className='label3'>Swimming</p>, type: 'Swimming' },
];

interface addsRemovesProp{
  price:number
  registrable:()=>void
  add:(classNames:classType)=>void
  remove:(classNames:classType)=>void
}
const AddsRemoves:React.FC<addsRemovesProp> = (props) => {
  return (
    <div className='SchedualCons'>
      <h4 className='price'>Total price:{props.price}$</h4>
      {controls.map((cntr) => {
        return (
          <AddRemove
            remove={() => props.remove(cntr.type as classType)}
            add={() => props.add(cntr.type as classType)}
            key={cntr.type}
            label={cntr.label}
          />
        );
      })}
      <button onClick={props.registrable} className='regBtn'>
        registrate now
      </button>
    </div>
  );
};
export default AddsRemoves;
