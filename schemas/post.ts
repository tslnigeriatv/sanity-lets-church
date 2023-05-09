export default {
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        {
            name: 'userId',
            title: 'UserId',
            type: 'string',
        },
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "text",
            title: "Text",
            type: "text",
        },
        {
            name: "region",
            title: "Region",
            type: "text",
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                            description: 'A short title for the image'
                        }
                    ]
                },
            ],
            options: {
				hotspot: true,
			},
        },
        {
            name: 'videos',
            title: 'Videos',
            type: 'array',
            of: [
                {
                    type: 'file',
                    accept: 'video/*',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                            description: 'A short title for the video'
                        }
                    ],
                    options: {
                        metadata: ['duration', 'resolution']
                    }
                }
            ]
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'liked',
            title: 'Liked',
            type: 'array',
            of: [{ type: 'liked' }],
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [{ type: 'comment' }],
        },
        
        // {
        //     name: "createdAt",
        //     title: "Created At",
        //     type: "datetime",
        //     readOnly: true,
        //     options: {
        //         defaultValue: new Date().toISOString(),
        //     }
        // },
        
    ]
}