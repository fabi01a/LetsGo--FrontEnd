import { createContext, useState } from 'react';

const CampsiteContext = createContext();

const CampsiteProvider = ({ children }) => {
    const [campsiteData, setCampsiteData] = useState([]);

    return (
        <CampsiteContext.Provider value={[campsiteData, setCampsiteData]}>
            {children}
        </CampsiteContext.Provider>
    );
};

export { CampsiteContext, CampsiteProvider };