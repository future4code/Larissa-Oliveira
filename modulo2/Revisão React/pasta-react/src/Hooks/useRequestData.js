import { useState, useEffect } from 'react'
import axios from 'axios'


const useRequestData = (initialDate, url) => {
    const [data, setData] = useState(initialDate)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert('Ocorreu um erro.')
            })
    }, [url])

    return (data)
}

export default useRequestData