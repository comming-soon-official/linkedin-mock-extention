import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import observeInputArea from "../components/internal/utils/observeInputArea";

export default defineContentScript({
  matches: ["*://*.linkedin.com/*"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: "wxt-react-example",
      position: "inline",
      anchor: "body",
      append: "first",
      onMount: (container) => {
        const wrapper = document.createElement("div");
        container.append(wrapper);

        const root = ReactDOM.createRoot(wrapper);
        root.render(<App />);
        return { root, wrapper };
      },
      onRemove: (elements) => {
        elements?.root.unmount();
        elements?.wrapper.remove();
      },
    });

    ui.mount();
    observeInputArea();
  },
});
