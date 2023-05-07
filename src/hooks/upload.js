import { db } from '../firebase/config';
import products from '../data/MOCK_DATA.json';

const addProductsToFirestore = async () => {
    try {
        const productsCollectionRef = db.collection('products');

        // Delete all existing products in the collection
        const existingProducts = await productsCollectionRef.get();
        existingProducts.forEach((doc) => doc.ref.delete());

        // Add all products from the JSON file to the collection
        products.forEach(async (product) => {
            await productsCollectionRef.add(product);
        });

        console.log('Products added to Firestore successfully!');
    } catch (error) {
        console.log('Error adding products to Firestore:', error);
    }
};

export { addProductsToFirestore };