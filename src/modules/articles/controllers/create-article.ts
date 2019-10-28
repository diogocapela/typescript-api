import database from '../../../database';
import logger from '../../../utils/logger';

export default async (req, res) => {
    try {
        const created = await database.createArticle({ ...req.body });

        res.status(201).json({ data: created });
    } catch (error) {
        logger.error(error);
        return res.status(400).end();
    }
};
