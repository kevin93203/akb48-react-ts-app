import { member } from "../../model"
import "./MemberCard.css"

interface Props {
    key: string
    member: member
}


export default function MemberCard({member}:Props){
    return (
        <div className="member-card">
            <img className="member-image" src={member.image_url} alt="" />
            <h1 className="member-name">{member.name}</h1>
            <div className="member-alphabet">{member.alphabet}</div>
            <div className="member-team">{`AKB48 ${member.team_name}`}</div>
        </div>
    )
} 