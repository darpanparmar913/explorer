
import Logo from './Logo';
import NevList from './NevList';
import Shop from './Shop';


function Header(){
    let navstyle = {backgroundColor: "#232323", borderTop: "5px solid #DA3636"}

    return(
        <section style={navstyle}>
            <div className="container">
                <div className="row align-item justfiy-content">
                    <NevList/>
                    <Logo/>
                    <Shop />
                </div>
            </div>
        </section>
    )
}

export default Header;