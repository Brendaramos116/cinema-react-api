import Pagina from '@/Components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const votados = (props) => {
    return (
        <Pagina titulo="Filmes mais votados">
            <Row md={4}>
                {props.votados.map(item => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p>Lançamento: {item.release_date}</p>
                                <p>Nota: {item.vote_average}</p>
                                <Link href={'/filmes/' + item.id} className='btn btn-danger'>Detalhes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default votados
export async function getServerSideProps(context) {
    
    const resultado = await apiFilmes.get('/movie/upcoming?language=pt-BR')
    const votados = resultado.data.results

    return {

        props: { votados },
    }
}