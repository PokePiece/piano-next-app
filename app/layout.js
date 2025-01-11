import Link from 'next/link';
import './globals.css'

function PageLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/music-note.svg" />
      </head>
      <body>
        <header>
          <h1>Piano: An Art Form</h1>
        </header>
        <nav className="flex justify-content text-lg bg-red-400 font-inter text-green-200">
          <Link href="/" className="no-underline text-center bg-blue-700 p-4 font-extrabold text-purple-300
           border-solid border-l-2 border-r-0 border-y-0 border-blue-950
            hover:bg-blue-800 active:bg-blue-900 hover:text-purple-400">Home</Link>
          <Link href="/beethoven" className="no-underline text-center bg-blue-700 p-4
           font-extrabold text-purple-300 border-solid border-r-3 border-y-0 border-l-2 border-blue-950
            hover:bg-blue-800 active:bg-blue-900 hover:text-purple-400">Beethoven</Link>

        </nav>

        {children}
        <footer>
          <p>Piano Dedication</p>
        </footer>
      </body>
    </html>
  )
}

export default PageLayout;