import { Dispatch, Reducer, createContext, useReducer } from "react";
import { ProductsValues, products as initialProducts } from "../assets/products";

export const ProductsContext = createContext(initialProducts);
export const ProductsDispatchContext = createContext<Dispatch<ProductsAction>>(() => { });

type actionType = 'Add' | 'Edit' | 'Remove';

interface ProductsAction {
    type: actionType;
    product?: ProductsValues;
    name?: string;
}

const storageId = 'productsList';

const reducer: Reducer<Array<ProductsValues>, ProductsAction> = (prevState, action) => {
    switch (action.type) {
        case 'Add':
            const addedState = action.product ? [action.product, ...prevState] : [...prevState]
            localStorage.setItem(storageId, JSON.stringify(addedState));
            return addedState;
        case 'Edit':
            const productsCopy = [...prevState];
            const editedProductIndex = productsCopy.findIndex(({ name }) => name === action.name);
            if (editedProductIndex !== -1 && action.product) {
                productsCopy[editedProductIndex] = action.product;
            }
            localStorage.setItem(storageId, JSON.stringify(productsCopy));
            return productsCopy;
        case 'Remove':
            const removedState = action.name ? prevState.filter(({ name }) => name !== action.name) : [...prevState];
            localStorage.setItem(storageId, JSON.stringify(removedState));
            return removedState;
        default:
            throw new Error('Action not exits');
    }
}

const ProductsProvider = ({ children }: { children: JSX.Element }) => {
    const localInitialProducts = localStorage.getItem(storageId);
    const [products, dispatchProducts] = useReducer(reducer, localInitialProducts ? JSON.parse(localInitialProducts) : initialProducts);

    return <ProductsContext.Provider value={products}>
        <ProductsDispatchContext.Provider value={dispatchProducts}>
            {children}
        </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
}

export default ProductsProvider;