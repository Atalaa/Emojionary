import React from "react";
import Entry from "./Entry";
import emoji from "../emojipedia";

function createEntry(emo) {
  return (
    <Entry
      key={emo.id}
      emoj={emo.emoji}
      name={emo.name}
      description={emo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>Emojionary</span>
      </h1>
      <dl className="dictionary">{emoji.map(createEntry)}</dl>
    </div>
  );
}

export default App;
