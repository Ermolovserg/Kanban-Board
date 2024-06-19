import { useState, useEffect, useRef } from "react";
import styles from "./Profile.module.css";
import { ReactComponent as ProfileImg } from "../../img/user-avatar.svg";

const links = [
  { id: 0, href: "#!", text: "Profile" },
  { id: 1, href: "#!", text: "Log Out" },
];

const Profile = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current?.contains(e.target) && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={styles.Profile} ref={menuRef}>
      <button className={styles.button} onClick={toggleMenu}>
        <ProfileImg />
      </button>
      {isMenuOpen && (
        <div className={styles.ProfileMenu}>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a className={styles.link} href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
