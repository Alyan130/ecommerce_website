import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


interface ProductData {
  id: number;
  name: string;
  image: string;
  price: number;
  tag?: string;
  cutprice?: string;
  quantity?: number;
}


interface ProductState {
  products: ProductData[];
}

const initialState: ProductState = {
  products: [],
};

interface RootState {
  product: ProductState;
}

export const fetchProducts = createAsyncThunk<ProductData[]>(
  'products/fetchProducts',
  async () => {
    const response = await fetch('/api/products'); // API endpoint to fetch all products
    if (!response.ok) {
      throw new Error('Failed to fetch products'); // Handle errors
    }
    const data = await response.json(); // Parse JSON data
    return data; // Return the fetched data
  }
);

export const fetchProductById = createAsyncThunk<ProductData, number>(
  'products/fetchProductById',
  async (id) => {
    const response = await fetch(`/api/products/${id}`); // API endpoint to fetch a single product
    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID: ${id}`);
    }
    const product = await response.json();
    return product; // Return the fetched product
  }
);

// Create the Redux slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload; // Update state with all fetched products
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        const existingProduct = state.products.find(
          (product) => product.id === action.payload.id
        );
        if (!existingProduct) {
          state.products.push(action.payload); // Add the fetched product if it's not already in the state
        }
      });
  },
});

// Selector to get all products
export const selectAllProducts = (state: { product: ProductState }) =>
  state.product.products;


export const selectProductById = (state: RootState, id: number) =>
  state.product.products.find((product) => product.id === id);

export default productSlice.reducer;
