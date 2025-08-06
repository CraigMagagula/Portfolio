
import { useState, useEffect } from 'react';

export const useTypingEffect = (words: string[], typeSpeed = 150, deleteSpeed = 100, delay = 1000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  return text;
};