import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import "preline";
import App from "./App.vue";
import router from "./routers";
// import BackButton from "./services/BackButton.vue";
// // @ts-ignore
// import RightSidebar from "./layouts/tutorials/RightSidebar.vue";
// import LeftSidebar from "./layouts/tutorials/LeftSidebar.vue";
// import Iam from "./services/Iam.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(createPinia());
// app.component("BackButton", BackButton);
// app.component("RightSidebar", RightSidebar);
// app.component("LeftSidebar", LeftSidebar);
// app.component("Iam", Iam);
