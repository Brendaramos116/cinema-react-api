import Pagina from '@/Components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const lancamento = (props) => {
    return (
        <Pagina titulo="Series em Cartaz">
            <Row md={4}>
                {props.lancamento.map(item => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p>Lançamento: {item.release_date}</p>
                                <p>Nota: {item.vote_average}</p>
                                <Link href={'/series/' + item.id} className='btn btn-danger'>Detalhes</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default lancamento

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/tv/airing_today?language=pt-BR')
    const lancamento = resultado.data.results

    return {

        props: { lancamento },
    }
}