import { connection } from "../connection";

export const selectTaskById = async (
   id: string
): Promise<any> => {
   const result = await connection.raw(`
        SELECT tasks.*, nickname FROM User_Task AS tasks
        JOIN User_Arq AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `)

   return result[0][0]
}