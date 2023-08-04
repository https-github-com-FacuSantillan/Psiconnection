export const SET_FILTER = "SET_FILTER";
export const SET_ORDERS = "SET_ORDERS";

export const setFilter = (filters) => {
    //comentario
    return {type: SET_FILTER, payload: filters}
}

export const setOrders = (order) => {
    return {type: SET_ORDERS, payload: order}
}