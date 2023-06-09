import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "./notes";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note)=>(
              <Note
              key ={note.id}
              title={note.title}
              content={note.content}
            />)
      )};
      <Footer />
    </div>
  );
}

export default App;
