import React from "react"
import { team } from '../../model'
import { member } from '../../model'
import MemberCard from "./MemberCard"
import CategoryPop from "./CategoryPop"

export default function Home(){
    const [memberData, setMemberData] = React.useState<member[]>([])
    const [isPop, setIsPop] = React.useState<boolean>(false)
    const [teamFilter, setTeamFilter] = React.useState<team>(team.all)
    
    function getMemberData(){
     return (
        // fetch('https://localhost:8000/api/member/list/')
        fetch('http://localhost:8000/api/member/list/')
          .then(result => result.json())
          .then(json => json.data)
     )
    };
    
  
    
  
    React.useEffect(()=>{
      getMemberData().then(data => {
        const memberData:member[] = []
        for (const key in data) {
          memberData.push({id:key,...data[key]})
        }
        setMemberData(memberData)
      }); 
    },[])
  
    function getFilterMemberData(){
      if(teamFilter == team.all){
        return memberData
      }
      return memberData.filter(member => member.team_name === teamFilter)
    }
  
    const filterMemberData = getFilterMemberData()
   
    const memberCards = filterMemberData.map((member) => <MemberCard key={member.id} member={member}/>)
    
    return (
        <div>
            <CategoryPop isPop={isPop} setIsPop={setIsPop} setTeamFilter={setTeamFilter}/>
            <h1 className='title'>MEMBER</h1>
            <div className='btn-container'>
            <button className='btn' onClick={()=>setIsPop(true)}>チームから探す</button>
            </div>
            <div className='memeber-cards'>
            {memberCards}
            </div>
        </div>
    )
}