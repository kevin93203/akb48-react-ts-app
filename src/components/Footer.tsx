import "./Footer.css"

export default function Footer(){
    return (
        <footer>
            <h4>FOLLOW US!</h4>
            <div className="social-media-container">
                <i className="fa-brands fa-twitter social-media-icon"></i>
                <i className="fa-brands fa-facebook social-media-icon"></i>
                <i className="fa-brands fa-instagram social-media-icon"></i>
                <i className="fa-brands fa-youtube social-media-icon"></i>
                <i className="fa-brands fa-line social-media-icon"></i>
                <i className="fa-brands fa-tiktok social-media-icon"></i>
            </div>
            <figure>
                <img src="https://s.akb48.co.jp/v2/common/img/lmark.png" alt="エルマーク" className="figure-img"/>
                <figcaption>このエルマークはレコード会社・映像制作会社が提供するコンテンツを示す登録商標です。
                RIAJ20012001 AKB48公式サイト</figcaption>
            </figure>
            <p className="r">© AKB48</p>
        </footer>
    )
}