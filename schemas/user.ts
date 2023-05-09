// user.js
export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
      },
      {
        name: 'username',
        title: 'Username',
        type: 'string',
    },
    {
        name: 'bio',
        title: 'Bio',
        type: 'text',
    },
    // Use avatar which is an image or photoURL,
    // depending on use case.
    {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
    },
    {
        name: "photoURL",
        title: "Photo URL",
        type: "string",
    },

    {
        name: 'followers',
        title: 'Followers',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'user'}]}],
    },
    {
        name: 'following',
        title: 'Following',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'user'}]}],
    },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        options: {
          readOnly: true,
        },
      },
      {
        name: 'updatedAt',
        title: 'Updated At',
        type: 'datetime',
        options: {
            readOnly: true,
        },
    },
    ],
  };