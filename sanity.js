import { createClient } from 'next-sanity'

export const config = {

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: 'q2qz90t7',
    useCdn: true,
}
export const sanityClient = createClient(config)