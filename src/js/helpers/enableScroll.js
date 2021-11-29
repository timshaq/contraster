import {SCROLL_DISABLE_CLASS_NAME} from "../css-names";

function enableScroll() {
    document.documentElement.classList.remove(SCROLL_DISABLE_CLASS_NAME);
}

export default enableScroll;