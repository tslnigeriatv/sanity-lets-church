export default {
    type: "document",
    name: "reels",
    title: "Reels",
    fields : [
        {
            name: "story",
            title: "Story",
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
    ] 
}