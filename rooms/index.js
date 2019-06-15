'use strict';
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'je8phd65',
  dataset: 'information',
  useCdn: true
})

module.exports.handler = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const response = await client.fetch('*[_type=="room"]{title,description,"imageUrl":image.asset->url,beds,facilities}')
    console.log(response)
    context.res = {
        body: response
    }
};