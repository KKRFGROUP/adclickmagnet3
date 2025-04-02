'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './NewsletterSection.module.css';

const NewsletterSection = () => {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Validate URL format
  const validateUrl = (value) => {
    // Basic URL validation regex
    const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    return urlPattern.test(value);
  };

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setUrl(value);
    
    // Only show validation error if user has typed something
    if (value) {
      setIsValidUrl(validateUrl(value));
    } else {
      setIsValidUrl(true); // Reset validation when field is empty
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final validation before submit
    if (!url || !validateUrl(url)) {
      setIsValidUrl(false);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Get domain name for the route
      let domain = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0];
      
      // Remove any TLD (.com, .org, etc.) for the slug
      domain = domain.split('.')[0];
      
      // Redirect to analysis page with the domain as a parameter
      router.push(`/seo-analyzer/analyze/${domain}`);
    } catch (error) {
      console.error('Error submitting URL:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.newsletterSection}>
      {/* Video Background */}
      <div className={styles.backgroundContainer}>
        <div className={styles.backgroundOverlay}></div>
        <video 
          className={styles.videoBackground}
          src="/images/home/vivek.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content with headline and input */}
      <div className={styles.contentContainer}>
        <div className={styles.headlineContainer}>
          <h2 className={styles.headline}>Stop the Guesswork</h2>
          <h2 className={styles.headline}>Embrace Marketing <br />as a Science</h2>
          <p className={styles.subHeadline}>Is your digital marketing strategy working?</p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.newsletterForm}>
          <div className={`${styles.inputContainer} ${!isValidUrl ? styles.inputError : ''}`}>
            <div className={styles.inputTextWrapper}>
              <input
                type="text"
                value={url}
                onChange={handleUrlChange}
                placeholder="Enter your website URL (e.g., example.com)"
                className={styles.urlInput}
                disabled={isSubmitting}
                required
              />
              {!isValidUrl && (
                <span className={styles.errorMessage}>Please enter a valid website URL</span>
              )}
            </div>
            <button 
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Analyzing...' : 'Analyze Now'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;