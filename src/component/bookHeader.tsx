

const Header=()=>{
    return(

<div>
                {/* <a href="/" onClick={(event: React.TouchEvent | React.MouseEvent) =>this.showTable(event)}>Book</a> |
                 <a href="#" onClick={(event: React.TouchEvent | React.MouseEvent)=>this.showadd(event)}> ADD </a>
                {this.state.show && <Booktable/>}
                {this.state.add && <Bookadd/>} */}

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#"><strong>Book App</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/"><strong>BookList</strong><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/addbook"><strong>AddBook</strong></a>
                            </li>
                        
                            <li className="nav-item active">
                                <a className="nav-link" href="/register"><strong>Register</strong></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/login"><strong>Login</strong></a>
                            </li>
                           
                            
                        </ul>
                      
                                       
</div>
</nav>  
</div>
)
}
export default Header