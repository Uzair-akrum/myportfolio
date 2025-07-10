import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function BlogPost() {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row">
        {/* Main Content */}
        <main className="w-full md:w-2/3 md:pr-8">
          <article className="space-y-6">
            <h1 className="text-3xl font-bold">Implementing and using Context in JavaScript</h1>
            <p className="text-sm text-gray-400">2024-02-11 · Technology · About 3.3 thousand words</p>

            <p>
              Developers who have used React to build applications must be familiar with React Context.
              In the React world, compared to prop-drilling, React Context can more elegantly pass data
              from parent components to deep-level subcomponents from top to bottom and ensure that
              data remains consistent between different subcomponents. However, Context is by no
              means exclusive to React, and Context can also be used in JavaScript.
            </p>

            <h2 className="text-2xl font-semibold">The nightmare of call stack and parameter passing</h2>
            <p>
              Whether building an application with a UI library, organizing a large number of unit tests, or
              writing a backend program with complex logic, developers often encounter a situation where
              one function calls another function. Then in the called function, you have to call a third function until the entire call stack is several layers deep. Passing variables between these functions can quickly become a very messy thing:
            </p>

            <SyntaxHighlighter language="typescript" style={dracula} className="rounded-lg">
              {`const A = (a = 1) => {
  const b = fibonacci(a);
  const c = B(b, a);

  return c / d + 1;
}

function B(b, a) {
  // More code here
}`}
            </SyntaxHighlighter>

            {/* Add more content sections here */}
          </article>
          <article className="space-y-6">
            <h1 className="text-3xl font-bold">Implementing and using Context in JavaScript</h1>
            <p className="text-sm text-gray-400">2024-02-11 · Technology · About 3.3 thousand words</p>

            <p>
              Developers who have used React to build applications must be familiar with React Context.
              In the React world, compared to prop-drilling, React Context can more elegantly pass data
              from parent components to deep-level subcomponents from top to bottom and ensure that
              data remains consistent between different subcomponents. However, Context is by no
              means exclusive to React, and Context can also be used in JavaScript.
            </p>

            <h2 className="text-2xl font-semibold">The nightmare of call stack and parameter passing</h2>
            <p>
              Whether building an application with a UI library, organizing a large number of unit tests, or
              writing a backend program with complex logic, developers often encounter a situation where
              one function calls another function. Then in the called function, you have to call a third function until the entire call stack is several layers deep. Passing variables between these functions can quickly become a very messy thing:
            </p>

            <SyntaxHighlighter language="typescript" style={dracula} className="rounded-lg">
              {`const A = (a = 1) => {
  const b = fibonacci(a);
  const c = B(b, a);

  return c / d + 1;
}

function B(b, a) {
  // More code here
}`}
            </SyntaxHighlighter>

            {/* Add more content sections here */}
          </article>
        </main>

        {/* Sidebar Content */}
        <aside className="w-full md:w-1/3 space-y-6 md:sticky md:top-8 md:self-start mt-8 md:mt-0">
          {/* Profile Card */}
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <Image
              src="/avatar.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full mx-auto"
            />
            <h2 className="mt-2 text-xl font-semibold">Sukka</h2>
            <p className="text-sm text-gray-400">Fairy tales are only beautiful in reality but are never continued</p>
            <div className="flex justify-between mt-4 text-sm">
              <span>103<br />article</span>
              <span>6<br />Classification</span>
              <span>188<br />Label</span>
              <span>29<br />Wan Zi</span>
            </div>
          </div>

          {/* Table of Contents Card */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Table of Contents</h3>
            <ul className="space-y-1 text-sm">
              <li>The nightmare of call stack and parameter passing</li>
              <li>In the React world</li>
              <li>Implementing your own Context</li>
              {/* Add more TOC items */}
            </ul>
          </div>

          {/* Classification Card */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Classification</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between">
                <span>Technology</span>
                <span>36</span>
              </li>
              <li className="flex justify-between">
                <span>notebook</span>
                <span>33</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}