import { createContext, useState, useEffect } from 'react';
import defaultProfile from '../data/profile.js';

export const ProfileContext = createContext();

const STORAGE_KEY = 'portfolioProfile';

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setProfile(JSON.parse(raw));
    } catch (e) {
      setProfile(defaultProfile);
    }
  }, []);

  const saveProfile = (next) => {
    const updated = typeof next === 'function' ? next(profile) : { ...profile, ...next };
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {}
  };

  const resetProfile = () => {
    setProfile(defaultProfile);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  };

  const uploadAvatar = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) return reject(new Error('No file'));
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        saveProfile({ avatar: dataUrl });
        resolve(dataUrl);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile: saveProfile, saveProfile, resetProfile, uploadAvatar }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
