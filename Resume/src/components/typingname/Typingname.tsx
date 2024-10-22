import { useEffect, useState } from "react";

const names = ["Oscar", "羅俊義", "Luójùnyì", "Tjun Yi"];

const TypingName: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [nameIndex, setNameIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenCycles = 1500;

  useEffect(() => {
    const currentName = names[nameIndex];

    if (!isErasing && charIndex < currentName.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentName[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    }

    if (isErasing && charIndex > 0) {
      const erasingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, erasingSpeed);

      return () => clearTimeout(erasingTimeout);
    }

    if (charIndex === currentName.length && !isErasing) {
      const erasingStartTimeout = setTimeout(() => {
        setIsErasing(true);
      }, delayBetweenCycles);

      return () => clearTimeout(erasingStartTimeout);
    }

    if (charIndex === 0 && isErasing) {
      const nextNameTimeout = setTimeout(() => {
        setIsErasing(false);
        setNameIndex((prev) => (prev + 1) % names.length);
      }, erasingSpeed);

      return () => clearTimeout(nextNameTimeout);
    }
  }, [charIndex, isErasing, nameIndex]);

  return (
    <h1>
      Hi, my name is <span>{displayedText}</span>
    </h1>
  );
};

export default TypingName;
