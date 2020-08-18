import axios from 'axios';

const action = {}

action.setRestaurantsOnMount = () => {

    return (dispatch) => {
        axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=2&entity_type=city&count=15&radius=1000000&establishment_type=restaurant`, {
            headers: {
                "user-key": "e9a9a227cb3e9ec3bb1ce2a29b907199",
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp)
            .then(res => {
                res.data.restaurants.map((main) =>
                    main)
                return res.data.restaurants
            }


            )
            .catch(error => {
                alert('Sorry, This is not available.Come back later.');
                console.log(error);
            })

            .then(results => {
                dispatch({ type: 'LATEST_RESTAURANTS', payload: results })
            })

    }
}

action.setRestaurantsOnSearch = (query) => {
    return (dispatch) => {
        axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${query}`, {
            headers: {
                "user-key": "e9a9a227cb3e9ec3bb1ce2a29b907199",
                "Content-Type": "application/json"
            }
        })

            .then(resp => resp)
            .then(function (data) {

                const id = data.data.location_suggestions[0].entity_id



                axios.get(`https://developers.zomato.com/api/v2.1/search?entity_id=${id}&entity_type=city&q=${query}&count=15&radius=100000&establishment_type=restaurant`, {
                    headers: {
                        "user-key": "e9a9a227cb3e9ec3bb1ce2a29b907199",
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => {
                        res.data.restaurants.map((main) =>

                            console.log('main'))
                        return res.data.restaurants
                    })
                    .catch(error => {
                        alert('Sorry, This is not available.Come back later.');
                        console.log(error);
                    })

                    .then(results => {
                        dispatch({ type: 'SET_RESTAURANTS', payload: results })
                    })
            })

    }

}

export const { setRestaurantsOnSearch, setRestaurantsOnMount } = action;