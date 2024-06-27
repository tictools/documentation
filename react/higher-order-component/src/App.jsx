import "./App.css";
import NotesListWithStorage from "./components/NotesList.js/NotesList";
import useAddNotesInSessionStorage from "./hooks/useAddNotesInSessionStorage";

function App() {
  useAddNotesInSessionStorage();

  return (
    <>
      <h1>HOC</h1>
      <h2>(Higher Order Component)</h2>
      <NotesListWithStorage title="Notes List" />
    </>
  );
}

export default App;
