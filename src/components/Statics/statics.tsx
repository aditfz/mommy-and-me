import React ,{useState}from 'react'

const Statics:React.FC =()=>{
    const [teacher,setTeacher]=useState(0)
    const [student,setStudent]=useState(0)
    const [event,setEvent]=useState(0)
    const [years,setyears]=useState(0)

setInterval(
   ()=>
   {if(teacher>5){
       return
   }else{
   setTeacher(teacher+1)}}
   
,1000)

    return(
        <div style={{width:"100%", color:"#fff",height:'200px',backgroundColor:'blue', display:'flex',alignItems:'center', justifyContent:"space-around"}}>
<div style={{display:'flex', flexDirection:"column"}}>
    <div>{teacher}</div>
    <div>Qualified Teachers</div>
    </div>
<div>{student}</div>
<div>{event}</div>
<div>{years}</div>

        </div>
    )
}
export default Statics