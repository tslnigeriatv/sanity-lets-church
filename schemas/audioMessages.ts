export default {
    name: 'audioMessages',
    type: 'document',
    title: 'Audio Messages',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'speaker',
            type: 'text',
            title: 'Name of Speaker',
        },
        {
            name: 'messageTitle',
            type: 'text',
            title: 'Message Title',
        },
        {
            name: 'imageThumbnail',
            type: 'image',
            title: 'Image Thumbnail',
        },
        {
            name: 'audioFile',
            type: 'file',
            title: 'Audio File',
            // validation: Rule => Rule.required(),
            options: {
                accept: 'audio/*',
            },
        },
    ],
};
