
export const addArticle = (id, headline, text, image, date) => (
    {
        type: "ADD_ARTICLE",
        headline,
        text,
        image,
        date
    }
);

export const updateArticle = (id, headline, text, image, date) => (
    {
        type: "UPDATE_ARTICLE",
        id,
        headline,
        text,
        image,
        date
    }
);

export const removeArticle = id => (
    {
        type: "REMOVE_ARTICLE",
        id
    }
);
