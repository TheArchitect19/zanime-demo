import sanityClient, { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'fkg6leq2',
    dataset: 'production',
    apiVersion: '2023-09-02',
    useCdn: true,
    token:'skRazm1VSndJbdf7WknTrdwD7j5OEFkNDAbYpbPcuUShKcTkQ3qkWc4c8svldWgDSNbGhn8Y9deBZEiMMsWtw6waFMGmt8dAHDz8PtMN3ET0IheqkWMVlbIxLjHDlPLslqbe6q8ifYDBeN4rhCqLgtC1082I4h6y4dgdV19NwNVm8wMZHd07'
})


const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);