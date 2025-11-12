export function getStrapiURL(): string {
    // Fallback to production Strapi URL if env is not set
    return (
        process.env.STRAPI_API_URL ||
        "https://railwayapp-strapi-production-e7ee.up.railway.app"
    )
}