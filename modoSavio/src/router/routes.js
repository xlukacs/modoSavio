import MainLayout from "layouts/MainLayout";
import IndexPage from "pages/IndexPage";
import ServicesPage from "pages/ServicesPage";
import LoginPage from "pages/LoginPage";
import OldPage from "pages/OldPage";
import ContactPage from "pages/ContactPage";

const routes = [
  // {
  //   path: "/",
  //   component: OldPage,
  //   meta: {
  //     requiresAuth: false,
  //   },
  // },
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: IndexPage,
      },
      {
        path: "home",
        component: IndexPage,
      },
      {
        path: "our_services",
        component: ServicesPage,
      },
      {
        path: "contacts",
        component: ContactPage,
      },
    ],
    meta: { requiresAuth: false },
  },
  // {
  //   path: "/login",
  //   component: LoginPage,
  //   meta: { requiresAuth: false },
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
