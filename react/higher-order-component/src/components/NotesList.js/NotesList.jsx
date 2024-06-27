import useGetNotesFromSessionStorage from "../../hooks/useGetNotesInSessionStorage";
import withStorageService from "../withStorageService/withStorageService";

const NotesList = ({ title, addItemToStorage, getItemFromStorage }) => {
  const { notes, areNotesAvialable } =
    useGetNotesFromSessionStorage(getItemFromStorage);

  if (!areNotesAvialable)
    return (
      <div className="notes-list__container--empty">No notes available</div>
    );

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <div>
              <h4>{note.name}</h4>
              <p>{note.description}</p>
              <p>{note.createdAt}</p>
              <p>{note.dueDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NotesListWithStorage = withStorageService(NotesList);

export default NotesListWithStorage;
