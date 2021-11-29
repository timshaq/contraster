import {SCROLL_DISABLE_CLASS_NAME} from "../css-names";

function disableScroll() {
    document.documentElement.classList.add(SCROLL_DISABLE_CLASS_NAME);
}

export default disableScroll;