const Navbar = () => {
    const homeActive = {
        color: 'white',
        backgroundColor: '#f1356d',
        borderRadius: '8px'
    }
    return ( 
        <nav className="navbar">
            <h1>Adeoti's Blog</h1>
            <div className="links">
                <a href="/" style={homeActive}>Home</a>
                <a href="/create">Create</a>
            </div>
        </nav>
     );
}
 
export default Navbar;