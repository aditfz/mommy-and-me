import React, { useState } from 'react';
import './Style/index.css';
import SelectWorkshop from './Select';
import WorkshopsDataText from '../../../constants/WorkshopsData';
export interface workshopType{
  value:string;
  label:string;
}

function Workshops() {
   
  const [selectedWorkshop, setSelectedWorkshop] = useState<workshopType|undefined>(undefined);
  const onChangeSelectedWorkshop = (newWorkshopSelected:workshopType) => {
    setSelectedWorkshop(newWorkshopSelected);
  };

  return (
    <div className='workshops'>
      <h3 className='workshops__title'>
        Which workshop you want to know about?
      </h3>

      <div>
        <label htmlFor='workshops'>Our Workshops:</label>

        <SelectWorkshop
          onChange={onChangeSelectedWorkshop}
          value={selectedWorkshop}
          
        />
      </div>
      {selectedWorkshop?.value === 'Music' ? (
        <div>
          <img
            className='workshops__image'
            src='https://static.mommypoppins.com/styles/image620x420/s3/zumbini5_edit.jpg'
            alt='Music Class'
          />
          <p className='workshops__text'>{WorkshopsDataText['Music']}</p>
        </div>
      ) : selectedWorkshop?.value === 'Yoga' ? (
        <div>
          <img
            className='workshops__image'
            src='https://cdn.kinsights.com/cache/c5/7c/c57c4fe75d506266567fc369fad850e0.jpg'
            alt='Yoga Class'
          />
          <p className='workshops__text'>{WorkshopsDataText['Yoga']}</p>
        </div>
      ) : selectedWorkshop?.value === 'Swimming' ? (
        <div>
          <img
            className='workshops__image'
            src='https://www.swimway.co.uk/wp-content/uploads/2019/03/SwimWay_StockImage_04-1024x576.jpg'
            alt='swimming class'
          />
          <p className='workshops__text'>{WorkshopsDataText['Swimming']}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Workshops;
