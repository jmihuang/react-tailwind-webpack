import React, { useState, useCallback } from "react";

const ToasterContext = React.createContext();

export const useToaster = () => React.useContext(ToasterContext);

export const ToasterProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((msg) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 2000);
  }, []);

  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      {visible && (
        <div className="fixed bottom-8 right-8 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          {message}
        </div>
      )}
    </ToasterContext.Provider>
  );
};
