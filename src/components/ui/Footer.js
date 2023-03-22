import logo from '../../assets/UI/footer-logo.svg'
function Footer () {
    return(
        <div className="footer">
            <img src={logo} alt="footer logo" width="122" height="40"></img>
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    );
}
export default Footer