'use strict';
const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'je8phd65',
  dataset: 'information',
  useCdn: true
})

module.exports.handler = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const response = await client.fetch('*[_type=="service"]{name,"Description":description.current,"imageUrl":image.asset->url}')
    console.log(response)
    context.res = {
        body: response
    }
};