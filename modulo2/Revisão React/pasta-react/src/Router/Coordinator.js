export const goToLogin = (history) => {
    localStorage.clear();
    history.replace('/login')
}

export const goToCadastro =(history) => {
    history.replace('/cadastro')
}


export const goToHome = (history) => {
    history.replace('/')
}

export const goToDetalhes = (history, id) => {
    history.push(`/detalhes/${id}`);
}

export const goToAdicionaPost = (history) => {
    const token = window.localStorage.getItem("token");
        
    if (token) {
        history.push('/adicionarReceitas')
    } else {
        goToLogin(history)
    }
}