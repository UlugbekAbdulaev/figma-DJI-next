/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
                pathname: "/products/images/**"
            }
        ]
    }
};

export default nextConfig;

// https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png