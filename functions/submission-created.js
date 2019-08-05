const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'c2cua1gm',
  dataset: 'production',
})

exports.handler = async function (event, context, callback) {
  const { payload } = JSON.parse(event.body)
  const result = await client.create({ _type: 'person', ...payload })
  callback(null, {
    statusCode: 200
  }) 
}
