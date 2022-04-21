import Api from "../Axios/Api"

const CATEGORIE_API="/categories"
 const fetchcategories=async()=>{
    return await Api.get(CATEGORIE_API);
}

export  const CategorieService={
    fetchcategories,
}