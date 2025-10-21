"use client"

import React,{useState, useEffect} from 'react'
import '../../../press-release/press-release.css'
import { useRouter } from "next/navigation";
import ContactFormComponent from '@/components/ContactFormComponent';
function BlogSlugContent({content}: {content: {
    heroHeading: string;
    image: string;
    content: {
      para: string[];
      subcontent: {
        subhead: string;
        subpara: string[];
      }[];
    };
  }}) {
    const router = useRouter();

    const [processedContent, setProcessedContent] = useState(content.content);

    const backendBaseUrl = "https://api.adclickmagnet.us"; 


    useEffect(() => {
        // Function to process HTML content and make image URLs absolute
        const processHtmlContent = (htmlString: string) => {
            if (!htmlString) return htmlString;

            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, 'text/html');
                const images = doc.querySelectorAll('img');

                images.forEach(img => {
                    const src = img.getAttribute('src');
                    // Check if the src starts with /storage/ and is not already an absolute URL
                    if (src && src.startsWith('/storage/') && !src.startsWith('http')) {
                        img.setAttribute('src', `${backendBaseUrl}${src}`);
                    }
                });

                // Return the modified HTML string
                return doc.body.innerHTML;
            } catch (error) {
                console.error("Error processing HTML content:", error);
                return htmlString; // Return original in case of error
            }
        };

        // Apply processing to all relevant content parts
        const newPara = content.content.para.map(processHtmlContent);
        const newSubcontent = content.content.subcontent.map(sub => ({
            ...sub,
            subpara: sub.subpara.map(processHtmlContent) // Assuming subpara can also contain HTML
        }));

        setProcessedContent({
            para: newPara,
            subcontent: newSubcontent
        });

    }, [content, backendBaseUrl]); // Re-run if content or base URL changes



  return (
    <div className="blog-slug-content-sec">
            <div className="blog-slug-content">
                {processedContent.para.map((each, index) => (
                    <React.Fragment key={index}>
                        {/* Use dangerouslySetInnerHTML to render the HTML string */}
                        <p dangerouslySetInnerHTML={{ __html: each }} />
                        <br />
                    </React.Fragment>
                ))}
                {processedContent.subcontent.map((each, index) => (
                    <div key={index} className="blog-slug-content-suncontent">
                        <h2 className="blog-slug-content-head">{each.subhead}</h2>
                        {/* Use dangerouslySetInnerHTML here too if subpara can contain HTML */}
                        <p dangerouslySetInnerHTML={{ __html: each.subpara }} />
                    </div>
                ))}
            </div>
             <ContactFormComponent
          apiEndpoint="http://127.0.0.1:8000/api/contact-us" // Your Laravel API endpoint for this form
          recipientEmail="pankajjha0191@gmail.com" // The email to send the inquiries to
          onSuccess={() => router.push("/thank-you")} // Redirect on successful submission
          formTitle="Let's Build Digital Excellence Together"
          imageSrc="/images/slug-page-contact-us.webp"
        />
    </div>
  )
}

export default BlogSlugContent