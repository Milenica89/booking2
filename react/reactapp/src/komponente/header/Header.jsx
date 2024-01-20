import "./header.css"
import {faBed, faCar, faPlane, faTaxi} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem active">
                 <FontAwesomeIcon icon={faBed} />
                   <span>Smeštaj</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Letovi</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Iznajmljivanje automobila</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Atrakcije</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi od/do aerodroma</span>
            </div>
        </div>
        <h1 className="headerTitle">Istražujte više, trošite manje!</h1>
        <p className="headerDesc">
           Iskoristite sjajne ponude na našoj aplikaciji za rezervaciju i putujte pametno. Vaše avanture su na dohvat ruke, a uštede čekaju da budu iskusene. 
           Pronađite idealan smeštaj i uživajte u putovanjima bez brige o budžetu.
        </p>
        <button className="headerBtn">Ulogujte se / Registrujte se</button>
      </div>
    </div>
  )
}

export default Header