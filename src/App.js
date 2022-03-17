import React from 'react'
import NavBar from "./Components/NavBar";
import Todo from "./Components/Todo"

function App() {
  let title = "my first react app";

  return (
    <div>
<NavBar title={title} />
<main>
<Todo title="Learning react" datetime="23rd March 2022" />
<Todo title="Premestntraining" datetime= "2nd January 2022" />
<Todo title="Going to market" datetime="3rd April 2022" />
<Todo title="Writing exams" datetime="18th December 2002" />
<Todo title="Depreciating cedis" datetime="4th October 2022" />

</main>

    </div>
  );
}

export default App
