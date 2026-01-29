import { useState, useEffect } from 'react';

function Navigation() {
  const [activeNav, setActiveNav] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'about', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section === 'header' ? 'profile' : section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'profile',
      label: 'PROFILE',
      target: '#header'
    },
    {
      id: 'about',
      label: 'ABOUT',
      target: '#about'
    },
    {
      id: 'contact',
      label: 'CONTACT',
      target: '#contact'
    }
  ];

  const handleNavClick = (id, target) => {
    setActiveNav(id);
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="top-nav">
      <div className="top-nav-left">
        prudhvi.1008@gmail.com
      </div>
      <div className="top-nav-right">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`top-nav-link ${activeNav === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id, item.target)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;