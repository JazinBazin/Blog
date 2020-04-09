
const articles = (state = [], action) => {
    switch (action.type) {
        case "ADD_ARTICLE":
            return [
                ...state,
                {
                    id: action.id,
                    headline: action.headline,
                    text: action.text,
                    image: action.image,
                    date: action.date
                }
            ]
        case "UPDATE_TODO":
            return state.map(article =>
                article.id == action.id
                    ? {
                        id: action.id,
                        headline: action.headline,
                        text: action.text,
                        image: action.image,
                        date: action.date
                    }
                    : acticle)
        case "REMOVE_TODO":
            return state.filter(article => artice.id != action.id);
    }
}