import {createClient} from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId:'l0av0xzh',
    dataset:"production",
    useCdn: true,
    apiVersion: '2023-12-7',
})

const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);


export default client;