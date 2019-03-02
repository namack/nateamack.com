module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: "Nate Amack", // Navigation and Site Title
  siteTitleAlt: "Nate Amack: Documented Learning in Public", // Alternative Site title for SEO
  siteTitleManifest: "Nate Amack",
  siteUrl: "https://nateamack.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteHeadline: "Documented Learning in Public", // Headline for schema.org JSONLD
  siteBanner: "/social/banner.jpg", // Your image for og:image tag. You can find it in the /static folder
  favicon: "static/social/logo.png", // Your image for favicons. You can find it in the /src folder
  siteDescription:
    "Minimal Blog with a focus on typography. Gatsby Starter powered by MDX.", // Your site description
  author: "Nate Amack", // Author for schemaORGJSONLD
  siteLogo: "/social/logo.png", // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@nate_amack", // Twitter Username - Optional
  ogSiteName: "minimal", // Facebook Site Name - Optional
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "UA-50498805-4",

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: "#79DBA9",
  backgroundColor: "#FFF"
};
