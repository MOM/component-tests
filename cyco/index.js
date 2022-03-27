export default function () {
  const { nuxt } = this;

  nuxt.hook("listen", async function (server, { port }) {
    console.log(Object.keys(nuxt));
    nuxt.options.router.extendRoutes = (routes, resolve) => {
      routes.push({
        name: "test-component",
        path: "/_test-component",
        component: resolve(__dirname, "components/TestComponent.vue"),
      });
    };
  });
}
