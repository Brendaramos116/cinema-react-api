import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const Cabecalho = () => {
    return (
      <>
         <Navbar bg="dark" variant="dark">
                  <Container>
                  <Navbar.Brand href="#home">Movies</Navbar.Brand>
                      <Nav className="me-auto">
                          <NavDropdown title='Filmes' id="basic-nav-dropdown">
                            <NavDropdown.Item href='/filmes'>Populares</NavDropdown.Item>
                            <NavDropdown.Item href='/filmes/cartaz'>Em Cartaz</NavDropdown.Item>
                            <NavDropdown.Item href='/filmes/filmesnovos'>Lançamentos</NavDropdown.Item>
                            <NavDropdown.Item href='/filmes/votados'>Mais Votados</NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown title='Séries' id="basic-nav-dropdown">
                            <NavDropdown.Item href='/series/populares'>Populares</NavDropdown.Item>
                            <NavDropdown.Item href='/series/cartaz'>Em Cartaz</NavDropdown.Item>
                            <NavDropdown.Item href='/series/lancamento'>Lançamentos</NavDropdown.Item>
                            <NavDropdown.Item href='/series/votados'>Mais Votados</NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link href="/atores/">Atores</Nav.Link>                          
                      </Nav>
                  </Container>
              </Navbar>
      </>
    )
  }
  
  export default Cabecalho