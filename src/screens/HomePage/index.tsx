import React from 'react';
import Centered from '../../components/HomePageComponents/centered';
import Form from '../../components/HomePageComponents/form';
import Workshops from '../../components/HomePageComponents/workshops/workshops';
import Schedual from '../../components/HomePageComponents/schedual';
import Statics from "../../components/Statics/statics"

function HomePage() {
  return (
    <div>
      <Centered />
      <Form />
      <Workshops />
      &emsp; &emsp;
      <Schedual />
      <Statics />
    </div>
  );
}

export default HomePage;
