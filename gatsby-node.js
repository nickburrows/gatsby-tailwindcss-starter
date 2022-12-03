const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const dsgTemplat = path.resolve("./src/templates/using-dsg.js")

  createPage({
    path: "/using-dsg",
    // component: require.resolve("./src/templates/using-dsg.js"),
    component: dsgTemplat,
    context: {},
    defer: true,
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions;

//     // page.matchPath is a special key that's used for matching pages
//     // only on the client.
//     if (page.path.match(/^\/app/)) {
//       page.matchPath = `/app/*`;

//       // Update the page.
//       createPage(page);
//     }
//   };
