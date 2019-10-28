import database from '../../../database';
import logger from '../../../utils/logger';

export default async (req, res) => {
    const { slug } = req.params;

    try {
        const deleted = await database.deleteArticleBySlug(slug);

        if (!deleted) {
            return res.status(400).end();
        }

        return res.status(200).json({ data: deleted });
    } catch (error) {
        logger.error(error);
        return res.status(400).end();
    }
};
