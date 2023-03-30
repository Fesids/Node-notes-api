

export const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Node react notes app</a>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home</a>
                    <a className="nav-item nav-link" href="/notes">Notes</a>
                    <a className="nav-item nav-link" href="/add/notes">+ add Notes</a>
                    
                </div>
            </div>
        </nav>      
    )
}