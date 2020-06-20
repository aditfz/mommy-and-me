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
            
          }, 8000/15);
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
            
          }, 8000/237);
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
            
          }, 8000/11);
        }
      }, [years]);



    return(
      <div style={{width:'100%',height:415,marginTop:100}}>
        <div style={{width:"100%", color:"#fff",height:'300px',backgroundColor:'#00B8D4', display:'flex',alignItems:'center', justifyContent:"space-around"}}>
<div style={{display:'flex', flexDirection:"column"}}>
    <div style={{textAlign:'center',fontSize:60}}>{teacher}</div>
    <p style={{textAlign:'center',fontSize:25}}>Qualified Teachers</p>
    </div>
    <div style={{display:'flex', flexDirection:"column"}}>
    <div style={{textAlign:'center',fontSize:60}}>{student}</div>
    <p style={{textAlign:'center',fontSize:25}}>Enrolled Student</p>
    </div>
    <div style={{display:'flex', flexDirection:"column"}}>
    <div style={{textAlign:'center',fontSize:60}}>{years}</div>
    <p style={{textAlign:'center',fontSize:25}}>years of experience</p>
    </div>
        </div>
        
        <svg style={{width:'100%' ,height:400,marginTop:-350 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" 
        fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,277.3C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </div>
    )
}
export default Statics