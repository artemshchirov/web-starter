import React, { useState } from 'react';
//import { ComponentName } from 'primereact/{componentname}';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const App = () => {
  const [dialogIsOpened, setDialogIsOpened] = useState<boolean | undefined>(
    false,
  );

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-600">
      <h1 className="pl-3 mb-10 text-3xl text-cyan-200 font-bold ">
        Vite + React + TypeScript + Tailwind + Primereact
      </h1>
      <Dialog
        visible={dialogIsOpened}
        onHide={() => setDialogIsOpened((prev) => !prev)}
      >
        Hello World!
      </Dialog>
      <Button
        label="Start"
        onClick={() => setDialogIsOpened((prev) => !prev)}
      />
    </div>
  );
};

export default App;
