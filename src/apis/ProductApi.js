import Api from './Api';

const url = "/products";

const getAll = (config) => {
    return Api.get(url, config);
};

const getByID = (id) => {
    return Api.get(`${url}/${id}`);
};

const create = (body) => {
    return Api.post(url, body);
};

const updateByID = (id, body) => {
    return Api.put(`${url}/${id}`, body);
}

const deleteByID = (id) => {
    return Api.delete(`${url}/${id}`);
}

// export
const ProductApi = { getAll, getByID, create, updateByID, deleteByID }
export default ProductApi;

