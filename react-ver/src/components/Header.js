function Header(){
    function navHandler(){
        console.log(this);
    }
    return (
        <nav className="h-20 flex bg-green-600 text-white p-4 items-center">
        <span className="nav-btn p-2 --open" data-type="starter" onClick={navHandler}>Starters</span>
        <span className="nav-btn p-2" data-type="main" onClick={this.navHandler}>Mains</span>
      </nav>
    );
}

export default Header;