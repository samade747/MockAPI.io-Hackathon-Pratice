import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id', // replace with your Sanity project ID
  dataset: 'your-dataset-name', // replace with your dataset name
  useCdn: false, // set to true for production
});

export default client;
