import News from "../models/News.js"

const createService = (body) => News.create(body);

const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user")

const countNews = () => News.countDocuments();

const topNewsService = () => News.findOne().sort({_id: -1}).populate("user")

const findByIdService = (id) => News.findById(id).populate("user")

const searchByTitleService = (title) => News.find({ 
    title: {$regex: `${title || ""}`, $options: "i"}
}).sort({_id: -1}).populate("user")

const byUserService = (id) => News.find({user: id}).sort({ _id: -1}).populate("user")

const updateService = (id, title, text, banner) => News.findOneAndUpdate({_id: id}, {title, text, banner}, {rawResult: true,})

const eraseService = (id) => News.findOneAndDelete({ _id: id})

export {
    createService,
    findAllService,
    countNews,
    topNewsService,
    findByIdService,
    searchByTitleService,
    byUserService,
    updateService, 
    eraseService
}