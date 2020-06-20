/* eslint-disable react-hooks/exhaustive-deps */
import React ,{useState, useEffect}from 'react'

const Statics:React.FC =()=>{
    const [teacher,setTeacher]=useState(0)
    const [student,setStudent]=useState(0)
    const [years,setYears]=useState(0)

   
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
            
          }, 10000/15);
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
            
          }, 10000/237);
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
            
          }, 10000/11);
        }
      }, [years]);



    return(
      <div style={{height:300}}>
        <div style={{width:"100%", color:"#fff",height:'200px',backgroundColor:'blue', display:'flex',alignItems:'center', justifyContent:"space-around"}}>
<div style={{display:'flex', flexDirection:"column"}}>
    <div>{teacher}</div>
    <div>'Qualified Teachers'</div>
    </div>
    <div style={{display:'flex', flexDirection:"column"}}>
    <div>{student}</div>
    <div>'Enrolled Student'</div>
    </div>
    <div style={{display:'flex', flexDirection:"column"}}>
    <div>{years}</div>
    <div>'years of experience'</div>
    </div>
    

        </div>
        <svg style={{width:'100%' ,height:400,marginTop:-210 }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill='#00c'
            fillOpacity='1'
            d='M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,165.3C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>
        </div>
    )
}
export default Statics