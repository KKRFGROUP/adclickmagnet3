import React from 'react'
import { useRouter } from 'next/router'
import { FiCornerDownLeft } from "react-icons/fi";

const webDevelopmentBlogs = [
  {
    id: 1,
    heading: "Understanding JavaScript Closures",
    paragraph: "Learn the concept of closures in JavaScript and how they help in creating better, more modular code.",
    time: "2024-11-21T10:30:00Z",
    category: "web development",
    name: "John Doe",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    heading: "CSS Grid vs Flexbox: When to Use Which?",
    paragraph: "Explore the differences between CSS Grid and Flexbox and understand the scenarios where each excels.",
    time: "2024-11-20T14:00:00Z",
    category: "web development",
    name: "Jane Smith",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    heading: "A Beginner's Guide to React Hooks",
    paragraph: "Discover the power of React Hooks and how they simplify state and effect management in React.",
    time: "2024-11-19T08:45:00Z",
    category: "web development",
    name: "Alice Johnson",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 4,
    heading: "Top 10 Web Development Trends in 2024",
    paragraph: "Stay ahead in the field by learning the latest web development trends and technologies.",
    time: "2024-11-18T16:20:00Z",
    category: "web development",
    name: "Bob Brown",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    heading: "Introduction to TypeScript for JavaScript Developers",
    paragraph: "Understand why TypeScript is a must-have skill for modern JavaScript developers.",
    time: "2024-11-17T11:00:00Z",
    category: "web development",
    name: "Charlie Davis",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    heading: "Best Practices for Responsive Web Design",
    paragraph: "Learn the best practices and techniques for creating mobile-friendly, responsive websites.",
    time: "2024-11-16T13:15:00Z",
    category: "web development",
    name: "Emily Evans",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 7,
    heading: "How to Optimize Web Performance",
    paragraph: "Tips and tricks to improve the performance of your website and enhance user experience.",
    time: "2024-11-15T09:50:00Z",
    category: "web development",
    name: "Frank Green",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 8,
    heading: "An Overview of Progressive Web Apps",
    paragraph: "Discover what makes Progressive Web Apps special and how they can revolutionize your projects.",
    time: "2024-11-14T18:40:00Z",
    category: "web development",
    name: "Grace Hall",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 9,
    heading: "Top JavaScript Frameworks to Learn in 2024",
    paragraph: "Compare the top JavaScript frameworks to see which one is best suited for your needs.",
    time: "2024-11-13T12:30:00Z",
    category: "web development",
    name: "Henry Irving",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 10,
    heading: "Exploring Serverless Architecture",
    paragraph: "Learn the benefits and limitations of serverless architecture in modern web development.",
    time: "2024-11-12T17:10:00Z",
    category: "web development",
    name: "Isla Jackson",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 11,
    heading: "Accessibility in Web Development",
    paragraph: "Understand the importance of accessibility and how to make your websites inclusive.",
    time: "2024-11-11T14:45:00Z",
    category: "web development",
    name: "Jack Kelly",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 12,
    heading: "Mastering Git for Web Developers",
    paragraph: "Learn how to use Git for version control and collaboration in web development projects.",
    time: "2024-11-10T10:20:00Z",
    category: "web development",
    name: "Karen Lewis",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 13,
    heading: "Exploring RESTful APIs for Beginners",
    paragraph: "Understand what RESTful APIs are and how to integrate them into your applications.",
    time: "2024-11-09T15:30:00Z",
    category: "web development",
    name: "Leo Miller",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 14,
    heading: "Best Tools for Front-End Developers",
    paragraph: "A comprehensive list of must-have tools for efficient front-end web development.",
    time: "2024-11-08T13:00:00Z",
    category: "web development",
    name: "Mia Nelson",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 15,
    heading: "The Basics of Web Security",
    paragraph: "Learn the foundational principles of web security to keep your sites safe from vulnerabilities.",
    time: "2024-11-07T16:50:00Z",
    category: "web development",
    name: "Noah Owens",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 16,
    heading: "Building Scalable Web Applications",
    paragraph: "Explore the principles of scalability and how to build applications that grow with user demands.",
    time: "2024-11-06T11:35:00Z",
    category: "web development",
    name: "Olivia Parker",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
  {
    id: 17,
    heading: "How to Get Started with Web Animation",
    paragraph: "Learn the basics of creating engaging animations using CSS and JavaScript.",
    time: "2024-11-05T14:20:00Z",
    category: "web development",
    name: "Paul Quinn",
    image: "https://tse4.mm.bing.net/th?id=OIP.MnjMcHg698AEHQXPRb5o7AHaDt&pid=Api&P=0&h=180",
  },
]

function Page() {
    const router = useRouter()
    console.log(router.query.slug);
    console.log(webDevelopmentBlogs[0]);
    if (router.isFallback) {
      return <div>Loading...</div>; // Show a loading state for fallback pages
    }
  return (
    <div className='blog-category-page-main-container'>
      <div className="blog-category-page-return-to-home flex items-center">
        <FiCornerDownLeft />
        <p className='blog-category-page-home-redirect'>HOME</p>
      </div>
    </div>
  )
}

export default Page

 
