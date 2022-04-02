import { Container, ContainerLogo, Logo, ContainerText, Text, ContainerFilter, Filter } from './styled'


export const Header = (props) => {


    return (
        <>
            <ContainerLogo>
                <Logo>
                    <h1>TMDB</h1>
                </Logo>
            </ContainerLogo>
            <Container>

                <ContainerText>
                    <Text>
                        <h1>
                            Milhões de filmes, séries e pessoas para descobrir. Explore já.
                        </h1>
                    </Text>
                </ContainerText>
                <ContainerFilter>
                    {/* <Filter>
                        <form id="form">
                            <input type="text" placeholder="Buscar" id="search" />
                        </form>
                        <p>
                            FILTRE POR:
                        </p>
                    </Filter> */}
                </ContainerFilter>

            </Container>
        </>
    )
}