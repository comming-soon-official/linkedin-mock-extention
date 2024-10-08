import { CONSTANTS } from "@/entrypoints/constant";
import { addSVGIconToInputBox, removeSVGIconFromInputBox } from ".";

const observeInputArea = (): void => {
  const handleFocus = (element: HTMLElement): void => {
    addSVGIconToInputBox(element);
  };

  const handleBlur = (element: HTMLElement): void => {
    removeSVGIconFromInputBox(element);
  };
  const checkActiveElement = (): void => {
    const activeElement = document.activeElement as HTMLElement;
    if (
      activeElement &&
      activeElement.classList.contains(CONSTANTS.INPUT_AREA_CLASS)
    ) {
      handleFocus(activeElement);
      activeElement.addEventListener("blur", () => handleBlur(activeElement), {
        once: true,
      });
    }
  };

  document.addEventListener("focusin", checkActiveElement);
};

observeInputArea();

export default observeInputArea;
