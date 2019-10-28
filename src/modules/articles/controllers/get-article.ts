import database from '../../../database';
import logger from '../../../utils/logger';

export default async (req, res) => {
    const { slug } = req.params;

    try {
        const doc = await database.getArticleBySlug(slug);

        if (!doc) {
            return res.status(400).end();
        }

        return res.status(200).json({ data: doc });
    } catch (error) {
        logger.error(error);
        return res.status(400).end();
    }
};
