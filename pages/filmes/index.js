import Pagina from '@/Components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'


    const index = ( props ) => {
        return (
            <Pagina titulo= "Filmes Populares">
                <Row md={4}>
                    {props.filmes.map(item => (
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
    
    export default index
    
    export async function getServerSideProps(context) {
    
        const resultado = await apiFilmes.get('/movie/popular?language=pt-BR')
        const filmes = resultado.data.results
    
        return {
    
            props: { filmes },
        }
    }



