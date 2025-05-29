

import React from 'react'
import { AuroraBackground } from '@/components/ui/AuroraBackground';
function BlogSlugHero({content}: {content:{head: string; name: string; time: string; img: string}}) {
  
  // const formatDate = (dateString: string) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: '2-digit',
  //     day: '2-digit',
  //     timeZone: 'UTC' // Add this to ensure consistent timezone handling
  //   });
  // };

  return (

            <AuroraBackground>
                    <div className="blog-page-hero-sec" > 
              <h1 className="blog-slug-hero-content-head">{content.head}</h1>
                    </div>
                </AuroraBackground>
  )
}

export default BlogSlugHero