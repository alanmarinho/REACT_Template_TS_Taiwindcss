import { createContext, useContext, useState, type ReactNode } from 'react';

export type TExemplo = '1' | '2';

// ------------------------------------------

interface contextData {
    exemplo: () => Promise<void>;
}
export const exemploContext = createContext<contextData>({} as contextData);
export const useExemplo = () => {
    return useContext(exemploContext);
};

export const ExemploContext = ({ children }: { children: ReactNode }) => {
    const [estado, setEstado] = useState<TExemplo>('1');

    const exemplo = async () => {
        try {
            console.log('Exemplo contexto', estado);
            setEstado(estado === '1' ? '2' : '1');

        } catch (err) {
            console.error('Erro ao executar exemplo:', err);
        }
    };

    const value = {
        exemplo
    };
    return <exemploContext.Provider value={value}>{children}</exemploContext.Provider>;
};