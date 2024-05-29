import { init } from "commandbar";


init("6d555837");

export const useCommandBar = () => {
    const loggedInUserId = "12345"
    window.CommandBar.boot(loggedInUserId);
}
