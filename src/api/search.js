import { createClient } from 'microcms-js-sdk';

export default async function formHandler(req, res) {
    const keyword = req.query.keyword;

    const client = createClient({
        serviceDomain: "erisaproduct",
        apiKey: "E4IlIqsobIKK67NGUFD8qfb5O0xDVFlse6cX",
    });

    const response = await client
        .get({
            endpoint: 'introduce',
            queries: {
                q: decodeURI(keyword)
            },
        })
    return res.status(200).json(response)
}