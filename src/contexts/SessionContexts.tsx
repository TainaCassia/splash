import { createContext, useContext, useState, type PropsWithChildren } from 'react';

const SessionContext = createContext<any>(undefined);

export function SessionProvider({ children }: PropsWithChildren) {
const [hasSeenSplash, setHasSeenSplash] = useState(false);
const [isAuthenticated, setIsAuthenticated] = useState(false);

return (
<SessionContext.Provider value={{
hasSeenSplash, isAuthenticated,
completeSplash: () => setHasSeenSplash(true)
}}>
{children}
</SessionContext.Provider>
);
}
export function useSession() {
const context = useContext(SessionContext);

if (!context) {
throw new Error('useSession deve ser usado dentro de um SessionProvider');
}

return context;
}