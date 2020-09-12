const config = {
  siteTitle: 'Alessio Koci',
  siteTitleShort: 'Koci',
  siteTitleAlt: 'Alessio Koci',
  siteLogo: '/logos/logo-1024.png',
  siteUrl: 'http://alessiokoci.com',
  repo: 'https://github.com/alewin/koci-blog',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:`Hi, I'm Alessio Koci, a Web developer from Bologna, where I graduated in Computer Science. At the moment I'm mainly working in the Javascript world, but I'm also interested in learning Backend, DevOps and Data engineering notions.`,
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-156429325-1',
  postDefaultCategoryID: 'Tech',
  userName: 'Koci',
  userEmail: 'ko.alessio@gmail.com',
  userTwitter: 'alessiokoci',
  menuLinks: [
    {
      name: 'About',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Projects',
      link: '/projects/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
