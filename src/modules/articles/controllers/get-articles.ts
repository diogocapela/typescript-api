import database from '../../../database';
import logger from '../../../utils/logger';

export default async (req, res) => {
    try {
        const docs = await database.getAllArticles();

        return res.status(200).json({ data: docs });
    } catch (error) {
        logger.error(error);
        return res.status(400).end();
    }
};
