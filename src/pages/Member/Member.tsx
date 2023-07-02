import React from "react"
import { useSearchParams, useLocation, Link } from "react-router-dom"
import { memberDetail } from "../../model"
import "./Member.css"

export default function Member(){
    const [searchParams, setSeachParams] = useSearchParams()
    const location = useLocation()
    console.log(location)
    const [member, setMember] = React.useState<memberDetail | undefined>(undefined)

    const mid = searchParams.get('mid')
    
    React.useEffect(()=> {
        fetch(`http://localhost:8000/api/members/detail?mid=${mid}`)
            .then(res => res.json())
            .then(data => setMember(data.data))
    },[])

    const search = location.state?.search || ""
    console.log(search)

    if (!member) {
        return (
            <h1>Loading</h1>
        )
    }

    return (
        <>  
            <nav className="location-nav">
                <Link to={`..${search}`}>メンバー</Link>
                <span>&gt;</span>
                <span>{member.name}</span>
            </nav>
            <h1 className='title'>MEMBER</h1>
            <div className="member-detail">
                <div className="member-detail-team">
                    <img src={member.teamIcon} alt="" />
                    {member.teamMedal && <img src={member.teamMedal} alt="" />}
                </div>
                <div className="member-img-container">
                    <img className="member-img" src={member.memberImg} alt="" />
                </div>
                <div className="member-info">
                    <div className="member-info-names">
                        <h3 className="member-info-jpname">{member.jpname}</h3>
                        <h1 className="member-info-name">{member.name}</h1>
                        <h2 className="member-info-enName">{member.enName}</h2>
                    </div>
                    <div className="member-other-info">
                        <p className="member-other-info-title">所属事務所</p>
                        <p>{member.agency}</p>
                        <p className="member-other-info-title">ニックネーム</p>
                        <p>{member.nickname}</p>
                        <p className="member-other-info-title">生年月日</p>
                        <p>{member.birthday}</p>
                        <p className="member-other-info-title">生年月日</p>
                        <p>{member.birthPlace}</p>
                    </div>
                    <div className="member-social-medias">
                        {member.twitter && 
                            <a href={member.twitter}>
                                <i className="fa-brands fa-twitter social-media-icon"></i>
                            </a>
                        }
                        {member.instagram && 
                            <a href={member.instagram}>
                                <i className="fa-brands fa-instagram social-media-icon"></i>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}