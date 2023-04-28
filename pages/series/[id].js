import Galeria from '@/Components/Galeria'
import Pagina from '@/Components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ series, atores }) => {
  return (
    <Pagina titulo={series.title}>
            <Row>
                <Col md={3}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + series.poster_path} />
                </Col>

                <Col md={9}>
                    <p><strong>Data de Lançamento: </strong>{series.release_date}</p>
                    <p><strong>Orçamento: </strong>{series.budget}</p>
                    <p><strong>Duração: </strong>{series.runtime} min</p>
                    <p><strong>Nota: </strong>{series.vote_average}</p>
                    <div>
                        <ul>
                            {series.genres.map(item => (
                                <li>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </Col>
            </Row>
            <Galeria titulo="Atores" lista={atores} foto="profile_path" link="/atores/" />
        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/tv/' + id + '?language=pt-BR')
    const series = resultado.data

    const resAtores = await apiFilmes.get('/tv/' + id + '/credits?language=pt-BR')
    const atores = resAtores.data.cast

    return {
        props: { series, atores }
    }
}
  