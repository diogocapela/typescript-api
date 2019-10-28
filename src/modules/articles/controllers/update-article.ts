import database from '../../../database';
import logger from '../../../utils/logger';

export default async (req, res) => {
    const { slug } = req.params;

    try {
        const updated = await database.updateArticleBySlug(slug, {
            ...req.body,
        });

        if (!updated) {
            return res.status(400).end();
        }

        return res.status(200).json({ data: updated });
    } catch (error) {
        logger.error(error);
        return res.status(400).end();
    }
};
