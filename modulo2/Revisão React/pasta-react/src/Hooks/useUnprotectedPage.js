import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToHome } from '../Router/Coordinator'

const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToHome(history)
        }
    }, [history])
}

export default useUnprotectedPage