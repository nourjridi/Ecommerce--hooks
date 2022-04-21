
import Api from "../Axios/Api"

const ARTICLE_API="/articles"

const fetchArticles=async()=>{
    return await Api.get(ARTICLE_API);
}

const fetchArticlesById=async(id)=>{
    return await Api.get(ARTICLE_API+'/'+id);
}

const deleteArticle=async(id)=>{
    return await Api.delete(ARTICLE_API+"/"+id);
}



const addArticle=async(article)=>{
    console.log(article)
    return await Api.post(ARTICLE_API,article);
}

const editArticle=async(article)=>{
    console.log(article)
    return await Api.put(ARTICLE_API+'/'+article._id,article);
}


export  const ArticleService={
    fetchArticles,
    deleteArticle,
    fetchArticlesById,
    addArticle,
    editArticle,

}
