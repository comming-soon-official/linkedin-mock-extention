import * as React from "react";
import SendIcon from "@/entrypoints/assets/svg/sendIcon";
import InsertIcon from "@/entrypoints/assets/svg/insertIcon";
import RegenerateIcon from "@/entrypoints/assets/svg/regenerate";

import { Dialog, DialogContent } from "@/entrypoints/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useUniversalStore } from "@/entrypoints/store/useUniversalStore";
import { insertText } from "./utils";
import { CONSTANTS } from "@/entrypoints/constant";
const responseTxt =
  "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";

const ModalComponent = ({
  onOpenChange,
  open,
}: {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState({ user: "", server: "" });
  const [btnState, setBtnState] = useState({
    loading: false,
    showRegenerateBtn: false,
  });
  const { setIsModalOpen, activeInputId } = useUniversalStore();

  useEffect(() => {
    setResponse({ server: "", user: "" });
    setBtnState({ loading: false, showRegenerateBtn: false });
    setPrompt("");
  }, [activeInputId]);
  const handleSubmit = () => {
    setResponse((prev) => ({ ...prev, user: prompt }));
    setPrompt("");
    setBtnState((prev) => ({ ...prev, loading: true }));
    setTimeout(() => {
      setBtnState((prev) => ({
        ...prev,
        loading: false,
        showRegenerateBtn: true,
      }));
      setResponse((prev) => ({ ...prev, server: responseTxt }));
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent className="w-full max-w-xl p-6 bg-white rounded-md shadow-lg">
        <div className="flex flex-col gap-4">
          {response.user && (
            <div className="flex justify-end">
              <div className="max-w-[75%] text-base text-[#666D80] bg-[#DFE1E7] p-2 pr-4 rounded-lg">
                {response.user}
              </div>
            </div>
          )}
          {response.server && (
            <div className="flex justify-start">
              <div className="max-w-[75%] text-base text-[#666D80] bg-[#DBEAFE] p-2 pr-4 rounded-lg">
                {response.server}
              </div>
            </div>
          )}
          <Input
            value={prompt}
            onChange={handleInputChange}
            placeholder="Your prompt"
          />
          {!btnState.showRegenerateBtn ? (
            <div className="flex justify-end">
              <Button
                loading={btnState.loading}
                onClick={handleSubmit}
                size={"sm"}
                leftIcon={<SendIcon className="w-4 h-4 " />}
                className="bg-[#3B82F6]"
              >
                Generate
              </Button>
            </div>
          ) : (
            <div className="flex justify-end gap-4">
              <Button
                loading={btnState.loading}
                variant={"outline"}
                size={"sm"}
                className="text-[#666D80] border-[#666D80] border-solid border"
                onClick={() => {
                  setIsModalOpen(false);
                  insertText(
                    document.querySelector(
                      `.${CONSTANTS.INPUT_AREA_CLASS}[${CONSTANTS.INPUT_AREA_DATA_ATTR}="${activeInputId}"]`
                    ) as HTMLElement,
                    response.server
                  );
                }}
                leftIcon={<InsertIcon fill="#666D80" className="w-4 h-4" />}
              >
                Insert
              </Button>
              <Button
                loading={btnState.loading}
                size={"sm"}
                leftIcon={<RegenerateIcon className="w-5 h-5" />}
                className="bg-[#3B82F6] "
              >
                Regenerate
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
