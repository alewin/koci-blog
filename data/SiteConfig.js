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
  siteDescription:'I’m Alssio Koci. I started writing blog post, to document and share some interesting ideas about web development.',
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
