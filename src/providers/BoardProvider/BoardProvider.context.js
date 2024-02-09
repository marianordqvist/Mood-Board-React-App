import { createContext } from 'react';

export default createContext({
    initialize: () => Promise,
    saveCard: () => { },
    deleteCard: () => { },
    handleLikes: () => { },
    onChangeTitle: () => { },
});
