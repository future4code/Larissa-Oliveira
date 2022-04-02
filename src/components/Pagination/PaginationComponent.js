import React from 'react'
import Pagination from '@mui/material/Pagination';
import { ContainerPagination } from './styled'

export const PaginationComponent = (props) => {
    return (
        <ContainerPagination>
            <Pagination 
                count={10} 
                page={props.page} 
                onChange={props.handleChange} 
                size='large'
                variant="outlined" 
                shape="rounded"
                color='secondary'
            />
        </ContainerPagination>
    )
}
