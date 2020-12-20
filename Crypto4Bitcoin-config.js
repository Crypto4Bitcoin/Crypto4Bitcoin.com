module.exports = {
  siteMetadata: {
    title: `Coming $oon`,
    description: `To jump right into it, you are here to learn about cryptocurrency and bitcoin.

    On this site you'll find everything you need to start using cryptocurrency and bitcoins like paper currency.
    Paper currency (aka Cash/Money/fiat currency) is use to exchange for goods and services for hundreds of years now.
    We have exchanged all sorts of things for goods and services, now we
    have something revolutionary and changing the way we exchange money.
    It's called Cryptocurrency.`,
    author: `@Crypto4Bitcoin`,
  },
  plugins: [
    `Crypto4Bitcoin`,
    {
      resolve: `Crypto4Bitcoin`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `Crypto4Bitcoin`,
    `Crypto4Bitcoin`,
    {
      resolve: `Crypto4Bitcoin`,
      options: {
        name: `Crypto4Bitcoin`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Crypto4Bitcoin-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
