import React, { useRef } from "react";

interface Props {
  cursorActive: boolean;
  currentItem: any;
}

const Cursor: React.FC<Props> = ({
  cursorActive,
  currentItem,
}: any): JSX.Element => {
  const cursorRef = useRef<any>(null);

  const cursorFunction = () =>
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef?.current?.clientWidth / 2;
      const mouseY = clientY - cursorRef?.current?.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`;
      cursorRef.current.style.opacity = 1;
    });

  React.useEffect(() => {
    cursorFunction();
  }, [cursorRef]);

  return (
    <div className="cursor" ref={cursorRef}>
      <img
        className={cursorActive ? "active" : ""}
        src={currentItem}
        alt="img"
      />
    </div>
  );
};

export default Cursor;
