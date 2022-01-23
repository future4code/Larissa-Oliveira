const input = process.argv[2]

enum Admin{
    USER="user",
    ADMIN="admin"
}

type Usuario = {
    name: string, 
    email: string, 
    role: Admin
    }

const lista: Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: Admin.USER},
	{name: "Ademir", email: "ademir@email.com", role: Admin.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Admin.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Admin.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Admin.USER},  
	{name: "Carina", email: "carina@email.com", role: Admin.ADMIN}      
] 

function filtro (lista:Usuario[]):string[]{
    return lista.filter((user)=>{
        return user.role === Admin.ADMIN
    })
    .map ((user)=>{
        return user.email
    })
}
  
  console.table(filtro(lista))