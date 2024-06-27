import { useEffect } from "react";
import notes from "../data/notes";
import SessionStorageService from "../services/SessionStorage";

const useAddNotesInSessionStorage = () => {
  useEffect(() => {
    SessionStorageService.setItem("notesList", notes);
  });
};

export default useAddNotesInSessionStorage;
