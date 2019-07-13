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
                  buildHookId: '5d296e096dd819e077a3ce18',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5tytagnd',
                  apiId: 'a069b006-779f-4455-905a-0f688e5f371d'
                },
                {
                  buildHookId: '5d296e09710182a49cc015ec',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i1vvznhd',
                  apiId: '41aefa2d-1752-4475-aee7-b36eab70597e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/furobins/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i1vvznhd.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
