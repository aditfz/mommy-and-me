import React, {  useReducer } from 'react';
import './Style/index.css';
import BuildTable from './BuildTable';
import AddsRemoves from './AddsRemoves';

const PRICES = {
  Music: 25,
  Yoga: 30,
  Swimming: 40,
};
type actionType={
  type:string,
  classNames?:classType
}
type stateType={
  classes:{
    Music:number,
    Yoga:number,
    Swimming:number
  }
  price:number,
  registerable:boolean
}
export type classType='Music'|"Yoga"|'Swimming'
const initialState={
  classes: {
        Music: 0,
        Yoga: 0,
        Swimming: 0,
      },
      price: 0,
      registerable: false,

}
const reducer=(state:stateType,action:actionType)=>{
   switch (action.type) {
    case "ADD_CLASS":
      {const {classes}=state
      if(!action.classNames){
        return state
      }
      classes[action.classNames]=classes[action.classNames]+1
      const price=state.price+PRICES[action.classNames]

      return {...state,classes,price}}
      case "REMOVE_CLASS":
        {const {classes}=state
        if(!action.classNames){
          return state
        }
        if(classes[action.classNames]===0){
          return state
        }
        classes[action.classNames]=classes[action.classNames]-1
        const price=state.price-PRICES[action.classNames]
  
        return {...state,classes,price}
      }
      case "CLEAR_DATA":
      
      return initialState
  
    default:
return state  }
}
const Schedual:React.FC =()=> {
  const [state,dispatch]=useReducer(reducer,initialState)
  // state = {
  //   classes: {
  //     Music: 0,
  //     Yoga: 0,
  //     Swimming: 0,
  //   },
  //   price: 0,
  //   registrable: false,
  // };

  const addClasses = (classNames:classType) => {
    dispatch({
      type:'ADD_CLASS',
      classNames
    })
    // const oldclass = this.state.classes[type];
    // const updateclass = oldclass + 1;
    // const updated = { ...this.state.classes };
    // updated[type] = updateclass;
    // const newprice = this.state.price + PRICES[type];
    // this.setState({
    //   classes: updated,
    //   price: newprice,
    // });
  };
  const removeClasses = (classNames:classType) => {
    dispatch({
      type:'REMOVE_CLASS',
      classNames
    })}
  //   const oldclass = this.state.classes[type];
  //   if (oldclass <= 0) {
  //     return;
  //   }
  //   const updateclass = oldclass - 1;
  //   const updated = { ...this.state.classes };
  //   updated[type] = updateclass;
  //   const newprice = this.state.price - PRICES[type];
  //   this.setState({
  //     classes: updated,
  //     price: newprice,
  //   });
  // };
  const registrable = () => {
    dispatch({
      type:'CLEAR_DATA'
    })}
  //   this.setState({
  //     classes: {
  //       Music: 0,
  //       Yoga: 0,
  //       Swimming: 0,
  //     },
  //     price: 0,
  //   });
  // };
    return (
      <div>
        <h2>Make your own Schedual</h2>
        <div className='Table'>
          <BuildTable classes={state.classes} />
        </div>
        <div className='SchedualCons'>
          <AddsRemoves
            registrable={registrable}
            price={state.price}
            add={addClasses}
            remove={removeClasses}
          />{' '}
        </div>
      </div>
    );
}
export default Schedual;
