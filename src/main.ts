import { createApp } from "vue";
import { createPinia } from "pinia";
import { useOfflineStore } from "./stores/offlineStore";
import "aos/dist/aos.css";
import AOS from "aos";
import "./style.css";
import "preline";
import App from "./App.vue";
import router from "./routers";
import ModuleDevelopmentNotice from "./components/public/edu/contents/ModuleDevelopmentNotice.vue";

AOS.init();
const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(createPinia());
const offlineStore = useOfflineStore();
offlineStore.initListener();

app.component("ModuleDevelopmentNotice", ModuleDevelopmentNotice);
