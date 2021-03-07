import { GameEvent } from "../types/GameData";

interface Props {
  events: GameEvent[];
}

export function GameEvents({ events }: Props) {
  return (
    <div className="game-events">
      {events.map((event) => (
        <div key={event.id} className="event">
          <div className="message">{event.message}</div>
        </div>
      ))}
    </div>
  );
}
