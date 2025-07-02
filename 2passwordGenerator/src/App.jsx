import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+-/?><';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => { passwordGenerator() },
    [length, numAllowed, charAllowed, passwordGenerator]);

  const copypasswordtoclipboard = useCallback(() => {
    passwordRef.current ?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 my-10 text-white bg-gray-800'>
        <h1 className='text-center text-3xl font-bold mb-6'>PASSWORD GENERATOR</h1>
        <div className='flex items-center shadow rounded-lg overflow-hidden mb-6'>
          <input
            type="text"
            className='outline-none w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-l'
            placeholder='password'
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            onClick={copypasswordtoclipboard}
            type="button"
            className="rounded-r-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            COPY
          </button>
        </div>
        <div className='flex items-center gap-x-2 mb-4'>
          <label htmlFor="lengthRange" className='flex-grow'>Length: {length}</label>
          <input
            id="lengthRange"
            type="range"
            min={6}
            max={50}
            value={length}
            className='flex-grow cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
        </div>
        <div className='flex items-center gap-x-2 mb-4'>
          <input
            type="checkbox"
            checked={numAllowed}
            id='numberInput'
            onChange={() => { setnumAllowed(prev => !prev) }}
            className='cursor-pointer'
          />
          <label htmlFor="numberInput" className='select-none'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input
            type="checkbox"
            checked={charAllowed}
            id='characterInput'
            onChange={() => { setcharAllowed(prev => !prev) }}
            className='cursor-pointer'
          />
          <label htmlFor="characterInput" className='select-none'>Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
