

const getStoredEvent = () => {
  const storedEvent = localStorage.getItem("event-list");
  if (storedEvent) {
    return JSON.parse(storedEvent);
  }
  return [];
};
const saveEvent = (id) => {
  const storedEvent = getStoredEvent();
  const exists = storedEvent.find((Id) => Id === id);
  if (!exists) {
    storedEvent.push(id);
    localStorage.setItem("event-list", JSON.stringify(storedEvent));
  }
};

export { getStoredEvent, saveEvent };
