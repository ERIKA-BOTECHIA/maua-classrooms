export const renderOnTargetOnLoadOrEvent = (target, idHTML, event = null) => {
  if (event == null) {
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById(idHTML).innerHTML = target;
    });
  } else {
    document.addEventListener(event, () => {
      document.getElementById(idHTML).innerHTML = target;
    });
  }
};
