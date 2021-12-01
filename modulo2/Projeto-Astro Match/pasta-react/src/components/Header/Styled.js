import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: ${props=> props.page === 2? 'flex-start': 'flex-end'};
    align-items: center;
    position: relative;
    margin-bottom: 10px;
    padding: 15px;
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    
`
export const Logo = styled.img`
    margin:0px 10px 30px;
    height: 90px;

`
export const Icon = styled.img`
    width: 32px;
    margin:0px 5px 30px;
    cursor: pointer;
        :hover{
            background-color: #0F0;
            border-radius: 50%;
        width: 33px;
        height: 33px;
        }
`