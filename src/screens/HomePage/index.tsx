import React from 'react';
import Centered from '../../components/HomePageComponents/centered';
import Form from '../../components/HomePageComponents/form';
import Workshops from '../../components/HomePageComponents/workshops';
import Schedual from '../../components/HomePageComponents/schedual';

function HomePage() {
  return (
    <div>
      <Centered />
      <Form />
      <Workshops />
      &emsp; &emsp;
      <Schedual />
    </div>
  );
}

export default HomePage;
