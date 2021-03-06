/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
const Statics: React.FC = () => {
  const [teacher, setTeacher] = useState(0);
  const [student, setStudent] = useState(0);
  const [years, setYears] = useState(0);
  const styles = {
    img: {
      position: 'relative',
      left: '20%',
      zIndex: 2,
      transform: 'rotate(180deg)',
      marginBottom: '-23%',
      animationName: '$cloud',
      animationDuration: '10s',
    },
    '@Keyframe cloud': {
      from: { left: '20%' },
      to: { left: '40%' },
    },
  };
  useEffect(() => {
    if (teacher === 0) {
      const teacherInterval = setInterval(() => {
        setTeacher((teacher) => {
          if (teacher < 15) {
            return teacher + 1;
          } else {
            clearInterval(teacherInterval);
            return teacher;
          }
        });
      }, 8000 / 15);
    }
  }, [teacher]);
  useEffect(() => {
    if (student === 0) {
      const studentInterval = setInterval(() => {
        setStudent((student) => {
          if (student < 237) {
            return student + 1;
          } else {
            clearInterval(studentInterval);
            return student;
          }
        });
      }, 8000 / 237);
    }
  }, [student]);
  useEffect(() => {
    if (years === 0) {
      const yearsInterval = setInterval(() => {
        setYears((years) => {
          if (years < 11) {
            return years + 1;
          } else {
            clearInterval(yearsInterval);
            return years;
          }
        });
      }, 8000 / 11);
    }
  }, [years]);

  return (
    <div style={{ width: '100%', marginTop: 100 }}>
      <img
        style={{
          position: 'relative',
          left: '20%',
          zIndex: 2,
          transform: 'rotate(180deg)',
          marginBottom: '-23%',
        }}
        src='http://littledino.wgl-demo.net/wp-content/uploads/2019/08/cloud_1.png'
        alt='cloud'
      />
      <svg
        style={{ marginBottom: '-28%', position: 'relative', zIndex: -1 }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#29B6F6'
          fillOpacity='1'
          d='M0,224L80,208C160,192,320,160,480,128C640,96,800,64,960,90.7C1120,117,1280,203,1360,245.3L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
      <svg
        style={{ marginBottom: '-3%' }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#81D4FA'
          fillOpacity='1'
          d='M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          width: '100%',
          color: '#fff',
          height: '300px',
          backgroundColor: '#81D4FA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          fontFamily: 'Balsamiq Sans',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', fontSize: 60 }}>{teacher}</div>
          <p style={{ textAlign: 'center', fontSize: 25 }}>
            Qualified Teachers
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', fontSize: 60 }}>{student}</div>
          <p style={{ textAlign: 'center', fontSize: 25 }}>Enrolled Student</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', fontSize: 60 }}>{years}</div>
          <p style={{ textAlign: 'center', fontSize: 25 }}>
            years of experience
          </p>
        </div>
      </div>
      <svg
        style={{ marginTop: -210, position: 'relative' }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#fff'
          fillOpacity='1'
          d='M0,224L80,202.7C160,181,320,139,480,138.7C640,
          139,800,181,960,192C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,
          1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          height: 150,
          overflow: 'hidden',
          marginTop: '-15%',
          position: 'relative',
          zIndex: -1,
        }}
      ></div>
    </div>
  );
};
export default Statics;
