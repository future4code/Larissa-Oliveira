// import { UserRepository } from "../business/user/UserRepository";
// import BaseDatabase from "./BaseDatabase";
// import * as admin from "firebase-admin"
// import User from "../model/User";

// admin.initializeApp({
//     credential: admin.credential.applicationDefault(),
//     databaseURL: 'https://aulaClean.firebaseio.com'
// });


// export default class FirestoreUserDatabase extends BaseDatabase implements UserRepository{
//     async insert(user:User): Promise<User>{
//         try{ 
//             await admin.firestore().collection("labook_users").doc(user.id).set(
//                 {
//                     name: user.name,
//                     email: user.email,
//                     password: user.password
//                 }
//             )
//             return user
//         }catch(error:any){
//             throw new Error(error.message)
//         }
//     }
//     async findBy(email: string): Promise<User | null> {
//         try{ 
//              const result = await admin.firestore().collection("labook_users").where('email',"==",email).get()
//              const userResult = result.docs[0] as any

//              if(!userResult){
//                  return null
//              }
//              return new User(
//                 userResult.id,
//                 userResult.name,
//                 userResult.email,
//                 userResult.password
//              )
//         }catch(e:any){
//             throw new Error(e.message)
//         }
//     }
// }