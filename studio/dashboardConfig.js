export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '612d32bb86eca7289b008abd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-h5f6gqsp',
                  apiId: 'f4918e21-b899-45e6-9a6c-d65435b4484d'
                },
                {
                  buildHookId: '612d32bc4bf51c3053d87198',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-72e6v4k6',
                  apiId: '32bfde4f-d8f8-4c87-8046-72db8aeffa4c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kumarrishabh0707/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-72e6v4k6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
