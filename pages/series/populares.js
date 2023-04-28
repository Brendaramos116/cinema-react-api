import Pagina from '@/Components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const populares = (props) => {
    return (
        <>
            <Pagina titulo="Series Populares">
                <Row md={4}>
                    {props.series.map(item => (
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
        </>
    )
}

export default populares

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/tv/popular?language=pt-BR')
    const series = resultado.data.results

    return {

        props: { series },
    }
}