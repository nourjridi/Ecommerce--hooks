import Api from "../Axios/Api"

const SCATEGORIE_API="/scategories"

const fetchtScategories=async(idcat)=>{
     return await Api.get(SCATEGORIE_API+"/cat/"+idcat)
}

const fetchtScategorie=async()=>{
    return await Api.get(SCATEGORIE_API)
}


export const ScategorieService={
    fetchtScategories,
    fetchtScategorie,
}