export default function () {
  const { nuxt } = this;

  // My nuxt module code goes here
  nuxt.hook("listen", async function (server, { port }) {
    console.log("test-component module ready!");
    console.log(Object.keys(nuxt));
    nuxt.options.router.extendRoutes = (routes, resolve) => {
      routes.push({
        name: "test-component",
        path: "/test-component",
        component: resolve(__dirname, "components/TestComponent.vue"),
      });
    };
  });
}
