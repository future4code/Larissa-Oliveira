import connection from "./connection";

// Função => Criar usuário
export const createUser = async (
    name: string,
    nickname: string,
    email: string

): Promise<any> => {
    await connection("ToDoListUser")
        .insert({
            id: Date.now().toString(), // gera um id para o usuário
            name: name,
            nickname: nickname,
            email: email
        });
};

// Função => Pegar usuário pelo id
export const getUserById = async (id: string): Promise<any> => {
    const userId = await connection("ToDoListUser")
        .select('*')
        .where('id', id)
    return userId
}

// Função => Atualizar dados do usuário
export const editUser = async (id: string, name: string, nickname: string): Promise<any> => {
    await connection("ToDoListUser")
        .update({
            name: name,
            nickname: nickname
        })
        .where('id', id)
}

// Função => Criar tarefa
export const createTask = async (
    title: string,
    description: string,
    limitDate: string,
    userId: string
): Promise<any> => {
    await connection("ToDoListTask")
        .insert({
            id: Date.now().toString(), // gera um id para a tarefa
            title: title,
            description: description,
            limit_date: limitDate,
            user_id: userId
        });
};

// Função => Pegar tarefa pelo id
export const getTaskById = async (id: string): Promise<any> => {
    const taskId = await connection("ToDoListTask")
        .select('ToDoListTask.id as task_id',
            'title',
            'description',
            'limit_date',
            'user_id',
            'nickname as user_id'
        )
        .leftJoin('ToDoListUser', 'ToDoListTask.user_id', 'ToDoListUser.id')
        .where('ToDoListTask.id', id)
    return taskId
}

