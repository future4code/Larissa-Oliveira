import styled from 'styled-components'


export const List = styled.div`
    overflow-y:scroll;
    height: 400px;
`

export const ItemProfile = styled.div`
    display: flex;
    align-items: center;
        :hover {
            background-color: #0F0;
            transform: translate(0px,-5px);
            border-radius: 15px;
        }
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%; 
        margin-right: 10px;
    }
`

export const ButtonClear = styled.button`
    width: 200px;
    height: 20px;
    font-size: 15px;
    position: absolute;
    /* bottom: 1px; */
    right: 23%;
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 15px;
    /* outline: none; */
    cursor: pointer;

        :hover{
            background: #0F0;
        }
`