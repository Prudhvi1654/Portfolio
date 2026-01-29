import { useEffect, useRef, useState } from 'react';

function GlowCard({ children, className = '', style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.15 });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glow-card ${visible ? 'visible' : ''} ${className}`.trim()}
      style={style}
      onMouseEnter={() => ref.current && ref.current.classList.add('hover')}
      onMouseLeave={() => ref.current && ref.current.classList.remove('hover')}
    >
      {children}
    </div>
  );
}

export default GlowCard;
