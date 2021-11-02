import router from "./router";

(async function () {
  // 👉 Replace this with client creation 👈
  
  const domain = window.env.AUTH0_DOMAIN;
const client_id = window.env.CLIENT_ID;
const redirect_uri = window.env.APP_URL;
window.auth0Client = await createAuth0Client({
 domain,
 client_id,
 redirect_uri,
 cacheLocation: "localstorage",
 audience: "https://testwithoutscopes", // 👈 Added
 scope: "test:test"//"read:reports", // 👈 Added
});

  // handle user navigation
  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);

  //handle user reload of browser
  if (sessionStorage.getItem("reload")) await router();
  sessionStorage.setItem("reload", "true");
})();
