export default {
    name: 'liked',
    title: 'Liked',
    type: 'document',
    fields: [
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'userId',
            title: 'UserId',
            type: 'string',
        },
    ],
};