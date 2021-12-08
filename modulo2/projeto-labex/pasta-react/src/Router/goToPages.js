export const goToHomePage = (history) => {
    history.push('/')
}
export const goToListTripsPage = (history) => {
    history.push('/listTrip')
}


export const goToLoginPage = (history) => {
    localStorage.clear();
    history.replace('/login')
}

export const goToApplicationFormPage = (history) => {
    history.push('/form')
}

export const goToAdminHomePage = (history) => {
    const token = window.localStorage.getItem("token");
    
    if (token) {
        history.push('/admin')
    } else {
        goToLoginPage(history)
    }
}


export const goToCreateTripPage = (history) => {
    const token = window.localStorage.getItem("token");
        
    if (token) {
        history.push('/admin/creatPage')
    } else {
        goToLoginPage(history)
    }
}


export const goToTripDetailsPage = (history,id) => {
    const token = window.localStorage.getItem("token");
        
    if (token) {
        history.push(`/admin/detail/${id}`);
    } else {
        goToLoginPage(history)
    }
}

export const goBack = (history) => {
    history.goBack()
}