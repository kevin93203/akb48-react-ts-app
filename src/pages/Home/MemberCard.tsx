import { member } from "../../model"
import { Link } from "react-router-dom"
import "./MemberCard.css"

interface Props {
    key: string
    member: member
    searchParams: URLSearchParams
}


export default function MemberCard({member, searchParams}:Props){
    return (
        <Link 
            to={`member?mid=${member.id}`}
            state={{
                search: `?${searchParams.toString()}`,
            }} 
            className="member-card"
        >
            <img className="member-image" src={member.image_url} alt="" />
            <h1 className="member-name">{member.name}</h1>
            <div className="member-alphabet">{member.alphabet}</div>
            <div className="member-team">{`AKB48 ${member.team_name}`}</div>
        </Link>
    )
} 