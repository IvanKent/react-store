const BASE_URL = 'http://localhost:3001'

export const fetcher = async (url) => {
    let responseObject = {errorMessage: '', data: []};
    try{
        const response = await fetch(`${BASE_URL}${url}`);
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status}`)
        }
        const data = await response.json();
        responseObject.errorMessage = '';
        responseObject.data = data;

        return responseObject;
    }catch(err){
        responseObject.errorMessage = err.message;
    }
    return responseObject;

}

export const getCategories = () => {
    const data = fetcher('/categories');
    return data;
}
export const getProducts = (id) => {
    const data = fetcher(`/products?catId=${id}`)
    return data;
}

export const getProductById = (id) => {
    const data = fetcher(`/products/${id}`)
    return data;
}