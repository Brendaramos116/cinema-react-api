import Galeria from "@/Components/Galeria"
import Pagina from "@/Components/Pagina"
import apiFilmes from "@/services/apiFilmes"
import axios from "axios"
import Link from "next/link"
import { Card, Col, Row } from "react-bootstrap"


const Detalhes = ({ ator, imagens, filmes, series }) => {
    return (
        <Pagina titulo={ator.name}>
            <Row>
                <Col mb={3}>
                    <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                </Col>
                <Col md={9}>
                    <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>
                    <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
                    <p><strong>Biografia:</strong>{ator.biography}</p>
                </Col>
            </Row>
            <Galeria titulo="Imagens" lista={imagens} foto="file_path" size={1}/>
            <Galeria titulo="Filmes" lista={filmes} foto="poster_path" />
            <Galeria titulo="Series" lista={series} foto="poster_path" />

            <h2 className='mt-4'>Imagens</h2>
            <Row>
                {imagens.map(item => (
                    <Col className='mb-4' md={2}>
                        <Card.Img variant='top' src={'https://image.tmdb.org/t/p/w500/' + item.file_path} />
                    </Col>
                ))}
            </Row>
            <h2 className='mt-4'>Filmes</h2>
            <Row>
                {filmes.map(item => (
                    <Col className='mb-4' md={2} title={item.name}>
                        <Link href={'/filmes/' + item.id}>
                            <Card.Img title={item.name} variant='top' src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                        </Link>
                    </Col>
                ))}
            </Row>
            <h2 className='mt-4'>Séries de TV</h2>
            <Row>
                {series.map(item => (
                    <Col className='mb-4' md={2} title={item.name}>
                        <Link href={'/filmes/' + item.id}>
                            <Card.Img title={item.name} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                        </Link>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/person/' + id + '?language=pt-BR')
    const ator = resultado.data

    const resImages = await apiFilmes.get('/person/' + id + '/images?language=pt-BR')
    const imagens = resImages.data.profiles

    const resFilmes = await apiFilmes.get('/person/' + id + '/movie_credits?language=pt-BR')
    const filmes = resFilmes.data.cast

    const resSeries = await apiFilmes.get('/person/' + id + '/tv_credits?language=pt-BR')
    const series = resSeries.data.cast

    return {
        props: { ator, imagens, filmes, series }
    }
}