export async function getProducts() {
    const response = await fetch("/api/products");
    if (!response.ok) {
        throw new Error('Falha ao carregar os dados');
    }
    return response.json();
}
