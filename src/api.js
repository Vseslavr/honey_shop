import { db } from "./firebase";

export function getProducts() {
  return db
    .collection("products")
    .get()
    .then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return products;
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
