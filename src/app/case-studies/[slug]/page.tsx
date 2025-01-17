"use client"
import React,{useRef,useState} from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CaseStudiesSlugHero from './sections/CaseStudiesSlugHero'
import "./slug.css"
import CaseStudiesSlugContent from './sections/CaseStudiesSlugContent'


const slugcasestudiescontent = {
  heroHeading: "10 Tips for Writing Clean Code",
  name: "John Doe",
  time: "2024-22-11T09:00:00Z",
  category: "web development",
  image: "/images/blog-img-template.jpg",
  content: {
    para: [
      "Writing clean code is not just about aesthetics; it's about creating a codebase that is easy to understand, maintain, and scale. Clean code reduces technical debt and improves collaboration among team members.",
      "In this article, we explore 10 essential tips for writing cleaner, more efficient code. Whether you're a seasoned developer or just starting your programming journey, these tips can help you build better software."
    ],
    subcontent: [
      {
        subhead: "1. Use Meaningful Variable and Function Names",
        subpara: [
          "Choosing clear and descriptive names for variables, functions, and classes is crucial for readability. Avoid single-letter names or overly generic terms like 'data' or 'info'.",
          "For example, instead of 'x', use 'totalAmount' to indicate what the variable represents. This small change makes your code more self-explanatory."
        ]
      },
      {
        subhead: "2. Follow Consistent Coding Conventions",
        subpara: [
          "Adhering to a consistent coding style across your projects ensures that your code is easier to read and understand. This includes naming conventions, indentation, and file organization.",
          "Using tools like ESLint or Prettier can help enforce coding standards automatically, saving time and effort."
        ]
      },
      {
        subhead: "3. Write Small, Reusable Functions",
        subpara: [
          "Breaking down complex logic into small, reusable functions improves code readability and reduces duplication. Aim for functions that perform a single task well.",
          "For instance, instead of a monolithic function handling multiple operations, create separate functions for each operation and call them as needed."
        ]
      },
      {
        subhead: "4. Comment Where Necessary",
        subpara: [
          "While clean code should be self-explanatory, there are times when comments are helpful. Use comments to explain why something is done, not what is being done.",
          "For example, '// Adjusting for daylight saving time' is more useful than '// Adding 60 minutes'."
        ]
      },
      {
        subhead: "5. Avoid Hardcoding Values",
        subpara: [
          "Hardcoding values makes your code less flexible and harder to maintain. Instead, use constants or configuration files to store values that might change.",
          "For example, instead of using '10' directly in your code, define a constant like 'const MAX_RETRIES = 10;' and reference it."
        ]
      },
      {
        subhead: "6. Optimize for Performance",
        subpara: [
          "Clean code is not just about readability; it should also be efficient. Use algorithms and data structures that are optimal for your use case.",
          "Measure performance using tools like Chrome DevTools or Python's cProfile to identify bottlenecks in your code."
        ]
      },
      {
        subhead: "7. Use Version Control Effectively",
        subpara: [
          "Commit your changes frequently with meaningful messages. Use branches to work on new features or fixes without disrupting the main codebase.",
          "Good version control practices ensure that you can easily track changes and collaborate with others."
        ]
      },
      {
        subhead: "8. Write Unit Tests",
        subpara: [
          "Unit tests ensure that your code behaves as expected. Writing tests for critical parts of your codebase can save time during debugging.",
          "Consider using testing frameworks like Jest for JavaScript or pytest for Python to streamline the process."
        ]
      },
      {
        subhead: "9. Refactor Regularly",
        subpara: [
          "Refactoring is the process of improving code structure without changing its functionality. Regular refactoring keeps your codebase clean and efficient.",
          "Set aside time for refactoring as part of your development process to address technical debt early."
        ]
      },
      {
        subhead: "10. Seek Peer Feedback",
        subpara: [
          "Code reviews are invaluable for catching potential issues and improving code quality. Encourage your peers to review your code and provide constructive feedback.",
          "Participating in code reviews also helps you learn from others and improve your own coding practices."
        ]
      }
    ]
  }  
};

const heroContent: {head: string; name: string; time: string; img: string}={head: slugcasestudiescontent.heroHeading, name: slugcasestudiescontent.name, img: slugcasestudiescontent.image, time: slugcasestudiescontent.time}

function CaseStudies() {
  const pageMainRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (arg?: boolean) => {
    setIsOpen(arg ?? !isOpen);

    if (pageMainRef.current) {
      if (!isOpen) {
        pageMainRef.current.classList.add("display-none-mobile-navbar");
      } else {
        pageMainRef.current.classList.remove("display-none-mobile-navbar");
      }
    }
  };
  return (
    <>
      <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
      <div ref={pageMainRef} className="page-main">
          <CaseStudiesSlugHero content={heroContent} />
          <CaseStudiesSlugContent content={slugcasestudiescontent} />
          <Footer  />
      </div>
    </>
  )
}

export default CaseStudies