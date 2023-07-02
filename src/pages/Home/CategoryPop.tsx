import "./CategoryPop.css"
import {SetURLSearchParams} from "react-router-dom"
import { team } from "../../model"

interface Props {
    isPop: boolean
    setIsPop: React.Dispatch<React.SetStateAction<boolean>>
    setSeachParams:SetURLSearchParams
}

export default function CategoryPop({isPop,setIsPop, setSeachParams}:Props){

    const style = {
        display: isPop? "flex":"none",
    }

    function handleFilterClick( key:string, value:team){
        // setTeamFilter(team)
        setSeachParams(prevParams => {
            if (value === null){
                prevParams.delete(key)
            } else {
                prevParams.set(key,value)
            }
            return prevParams
        })
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
                        <button className="btn-teams team-a" onClick={()=>handleFilterClick('team_id','チームA')}>Team A</button>
                        <button className="btn-teams team-k" onClick={()=>handleFilterClick('team_id','チームK')}>Team K</button>
                        <button className="btn-teams team-b" onClick={()=>handleFilterClick('team_id','チームB')}>Team B</button>
                        <button className="btn-teams team-4" onClick={()=>handleFilterClick('team_id','チーム4')}>Team 4</button>
                        <button className="btn-teams team-e" onClick={()=>handleFilterClick('team_id','研究生')}>研究生</button>
                    </div>
                    <div className="menu-other">
                        <button className="btn-other" onClick={()=>handleFilterClick('team_id',null)}>全メンバーをみる</button>
                        <button className="btn-other" onClick={()=>handleFilterClick('team_id','支配人')}>支配人</button>
                    </div>
                </div>
            </div>
        </div>
    )
}