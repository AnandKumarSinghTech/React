import React, {useState} from "react";

const faqData = [
    {
    question: "What is React?",
    answer: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension for JavaScript. It looks very similar to HTML but allows you to write JavaScript logic directly inside your UI structure."
  },
  {
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight copy of the actual DOM. React uses it to figure out exactly what changed in your UI, so it only updates the specific parts that need changing, rather than reloading the whole page."
  },
  {
    question: "What are React components?",
    answer: "Components are the building blocks of any React application. They are reusable, self-contained pieces of UI (like a button, a form, or an entire page) that can have their own logic and styling."
  },
  {
    question: "What is state in React?",
    answer: "State is a built-in React object that is used to contain data or information about the component. Whenever a component's state changes, the component re-renders to reflect those changes."
  },
  {
    question: "What are React Hooks?",
    answer: "Hooks are special functions (like useState and useEffect) that let you 'hook into' React state and lifecycle features directly from functional components, without needing to write class components."
  },
  {
    question: "How do you pass data between components?",
    answer: "Data is typically passed from a parent component down to a child component using 'props' (short for properties). Props act like arguments passed to a standard JavaScript function."
  }
];

const FaqItem=({question, answer}) =>{
    const [isOpen, setIsOpen]=useState(false);

return (
    <div className="border-b border-gray-200 last:border-0 py-3">
        <button className="flex w-full items-center justify-between text-left focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
                <span className="font-semibold text-gray-800 text-lg">{question}</span>
                {/* drop-down */}
                <svg className={`h-6 w-6 text-gray-500 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M-19 9l-7 7-7-7"
                    />
                </svg>
        </button>

        {/* answer container */}
        {isOpen && (
            <div className="mt-3 text-gray-600 leading-relaxed pr-8 animate-fade-in">{answer}</div>)}
    </div>
)
}

const FaqSection = () => {
    return (
        <div className="w-full min-h-screen bg-gray-50 py-16 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 P-8">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                    <p className="mt-2 text-gray-500">Everything you need to know about getting started with React.</p>
                </div>

                {/* map thrpough our question array */}
                <div className="flex flex-col">
                    {faqData.map((faq, index) => (
                        <FaqItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default FaqSection