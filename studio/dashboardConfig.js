export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6020e314b9896f39eb4c3f87',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-tkbrc5ko',
                  apiId: '1fb6c26f-2751-4c58-adea-955d3348cac9'
                },
                {
                  buildHookId: '6020e315a96f4cacb517c003',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-16shgvkh',
                  apiId: 'd189feca-b8fa-4679-9cc8-bedc48c44583'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uekyo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-16shgvkh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
