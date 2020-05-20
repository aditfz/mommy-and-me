import React from 'react';
import './Style/index.css';

interface addremoveProp{
  add:()=>void
  remove:()=>void
  label:JSX.Element
}
const AddRemove:React.FC<addremoveProp> = props => {
  return (
    <div className='SchedualCon'>
      <div className='a'>{props.label}</div>
      <button onClick={props.add}>Add</button>
      <button onClick={props.remove}> Remove</button>
    </div>
  );
};
export default AddRemove;
