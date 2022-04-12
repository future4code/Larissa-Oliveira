import { BaseDataBase } from './BaseDataBase';

export class FeedDataBase extends BaseDataBase {
    private static tableNameA = 'Recipe_Cookenu'
    private static tableNameB = 'User_Cookenu'

    public async getFeed(id: string): Promise<any> {
        try {
            const [feed] = await BaseDataBase.connection(FeedDataBase.tableNameA).select(
                `${FeedDataBase.tableNameA}.id`,
                `${FeedDataBase.tableNameA}.title`,
                `${FeedDataBase.tableNameA}.description`,
                `${FeedDataBase.tableNameA}.creationDate`,
                `${FeedDataBase.tableNameA}.creatorId`,
                `${FeedDataBase.tableNameB}.name`
            )
                .join(
                    `${FeedDataBase.tableNameB}`,
                    `${FeedDataBase.tableNameA}.creatorId`,
                    `${FeedDataBase.tableNameB}.id`
                )

                .where(`${FeedDataBase.tableNameA}.creatorId`, id)
            return feed
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}