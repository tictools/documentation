import { useEffect, useState } from "react";

const useGetNotesFromSessionStorage = (getItemFromStorage) => {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    const notesList = getItemFromStorage({ item: "notesList" });
    setNotes(notesList);
  }, []);

  return {
    notes,
    areNotesAvialable: notes?.length,
  };
};

export default useGetNotesFromSessionStorage;
