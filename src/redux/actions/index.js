import axios from 'axios';
const action = {}

action.setRestaurantsOnMount = () => {

    return (dispatch) => {
        axios.get('https://developers.zomato.com/api/v2.1/search?entity_type=city&q=india&count=8&radius=100000&establishment_type=restaurant', {
            headers: {
                "user-key": "e9a9a227cb3e9ec3bb1ce2a29b907199",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                res.data.restaurants.map((main) =>

                    console.log())
                return res.data.restaurants
            }


            )
            .then(results => {
                dispatch({ type: 'SET_RESTAURANTS', payload: results })
            })

    }
}

action.setRestaurantsOnSearch = (query) => {
    return (dispatch) => {
        axios.get(`https://developers.zomato.com/api/v2.1/search?entity_type=city&q=${query}&count=15&radius=100000&establishment_type=restaurant`, {
            headers: {
                "user-key": "e9a9a227cb3e9ec3bb1ce2a29b907199",
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                res.data.restaurants.map((main) =>

                    console.log(main))
                return res.data.restaurants
            }


            )
            .then(results => {
                dispatch({ type: 'SET_RESTAURANTS', payload: results })
            })

    }

}

export const { setRestaurantsOnSearch, setRestaurantsOnMount } = action;