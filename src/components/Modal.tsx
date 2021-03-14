import { GameEvent } from "../types/GameData";

export function Modal({ children, style }: any) {
  console.log(children);
  return (
    <div className="modal">
      <div className="shade">
        <div className="container" style={style}>
          {children}
        </div>
      </div>
    </div>
  );
}
