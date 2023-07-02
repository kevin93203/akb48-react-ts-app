import React from "react"
import {useSearchParams} from "react-router-dom"
import { member } from '../../model'
import MemberCard from "./MemberCard"
import CategoryPop from "./CategoryPop"

export default function Home(){
    const [searchParams, setSeachParams] = useSearchParams()
    const [memberData, setMemberData] = React.useState<member[]>([])
    const [isPop, setIsPop] = React.useState<boolean>(false)

    const teamFilter = searchParams.get('team_id')
    
    function getMemberData(){
     return (
        // fetch('https://localhost:8000/api/member/list/')
        fetch('http://localhost:8000/api/member/list')
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
      if(teamFilter === null){
        return memberData
      }
      return memberData.filter(member => member.team_name === teamFilter)
    }
  
    const filterMemberData = getFilterMemberData()
   
    const memberCards = filterMemberData.map((member) => <MemberCard key={member.id} member={member}/>)
    
    return (
        <div>
            <CategoryPop isPop={isPop} setIsPop={setIsPop} setSeachParams={setSeachParams}/>
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