const AppRoutes = () => {
    return {
        home: {
            home: '/',
            contactUs: "/home/contact-us",
            register: "/home/register",
            login: "/home/login",
            notFound: "/home/not-found"
        },
        products: {
            allCategories : "/categories",
            category: "/categories/:id",
            allProducts: "/products",
            product: "/product/:id",
            // category: (id:string) => `/products/${id}`,
            // product: (id:string) => `/product/${id}`,
        },
        dashboard: {
            dashboard: "/dashboard",
        },
    }
};

export default AppRoutes;