import "./CategoryPop.css"
import { team } from "../../model"

interface Props {
    isPop: boolean
    setIsPop: React.Dispatch<React.SetStateAction<boolean>>
    setTeamFilter:React.Dispatch<React.SetStateAction<team>>
}

export default function CategoryPop({isPop,setIsPop, setTeamFilter}:Props){

    const style = {
        display: isPop? "flex":"none",
    }

    function handleFilterClick( team:team){
        setTeamFilter(team)
        setIsPop(false)
    }

    return (
        <div className="overlay" style={style}>
            <div className="category-pop">
                <div className="close-pop-wrap" onClick={()=>setIsPop(false)}>
                        <div>&times;</div>
                </div>
                <div className="category-menu">
                    <p className="menu-text">チームから探す</p>
                    <div className="menu-teams">
                        <button className="btn-teams team-a" onClick={()=>handleFilterClick(team.teamA)}>Team A</button>
                        <button className="btn-teams team-k" onClick={()=>handleFilterClick(team.teamK)}>Team K</button>
                        <button className="btn-teams team-b" onClick={()=>handleFilterClick(team.teamB)}>Team B</button>
                        <button className="btn-teams team-4" onClick={()=>handleFilterClick(team.team4)}>Team 4</button>
                        <button className="btn-teams team-e" onClick={()=>handleFilterClick(team.E)}>研究生</button>
                    </div>
                    <div className="menu-other">
                        <button className="btn-other" onClick={()=>handleFilterClick(team.all)}>全メンバーをみる</button>
                        <button className="btn-other" onClick={()=>handleFilterClick(team.S)}>支配人</button>
                    </div>
                </div>
            </div>
        </div>
    )
}