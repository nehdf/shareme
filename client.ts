import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
    projectId: import.meta.env.REACT_APP_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2025-8-5',
    useCdn: true,
    token: import.meta.env.REACT_APP_TOKEN
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;