import { renderOnTargetOnLoadOrEvent } from "./functions/functions.js";
import { headerNavbar } from "./templates/partials/HeaderNavbar.js";
import { hero } from "./templates/partials/HeroComponent.js";

const main = () => {
  renderOnTargetOnLoadOrEvent(headerNavbar, "idA-a", null);
  renderOnTargetOnLoadOrEvent(hero, "idB-b", null);
};

const app = () => {
  main();
};

app();
