
export const setupScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // For staggered animations (e.g., in project cards)
          if (entry.target.classList.contains('stagger-children')) {
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('visible');
              }, index * 100); // 100ms delay between each child
            });
          }
        }
      });
    },
    { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Starts animation a bit before element enters viewport
    }
  );

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach((element) => {
    observer.observe(element);
  });
  
  // For staggered items
  const staggerItems = document.querySelectorAll('.stagger-item');
  staggerItems.forEach((item) => {
    item.classList.add('animate-on-scroll');
    observer.observe(item);
  });
};
