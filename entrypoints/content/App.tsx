import ModalComponent from "@/entrypoints/components/internal/ModalComponent"; // Assuming this is the correct path
import { useUniversalStore } from "../store/useUniversalStore";

const App = () => {
  const { isModalOpen, setIsModalOpen, dialogRef } = useUniversalStore();

  return (
    <>
      <ModalComponent
        onOpenChange={() => setIsModalOpen(false)}
        open={isModalOpen}
      />
      <div
        ref={dialogRef}
        style={{
          backgroundColor: "transparent",
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "0px",
          right: "0px",
          scale: "125%",
          overflow: "hidden",
          zIndex: 100000000000,
          pointerEvents: "none",
          userSelect: "none",
        }}
      ></div>
    </>
  );
};

export default App;
