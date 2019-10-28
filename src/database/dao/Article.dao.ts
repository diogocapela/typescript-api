import Article from '../models/article.model';

export const getAllArticles = () =>
    Article.find({})
        .lean()
        .exec();

export const getArticleById = id =>
    Article.findOne({ _id: id })
        .lean()
        .exec();

export const getArticleBySlug = slug =>
    Article.findOne({ slug })
        .lean()
        .exec();

export const createArticle = data => Article.create({ ...data });

export const updateArticleById = (id, data) =>
    Article.findOneAndUpdate(
        {
            _id: id,
        },
        data,
        { new: true },
    )
        .lean()
        .exec();

export const updateArticleBySlug = (slug, data) =>
    Article.findOneAndUpdate(
        {
            slug,
        },
        data,
        { new: true },
    )
        .lean()
        .exec();

export const deleteArticleById = id =>
    Article.findOneAndRemove({
        _id: id,
    });

export const deleteArticleBySlug = slug =>
    Article.findOneAndRemove({
        slug,
    });
