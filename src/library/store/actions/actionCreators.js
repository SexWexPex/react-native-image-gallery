import {FETCH_IMAGES} from './actionTypes';
const API = "https://api.unsplash.com/photos/?client_id=";
const clientID = {
    first: "cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0",
    second: "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
    third: "896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043"
};

export const fetchImages = () => {
    return async dispatch => {
        const responseFirst = () => fetch(API + clientID.first + "&page=1");
        const responseSecond = () => fetch(API + clientID.second + "&page=2");
        const responseThird = () => fetch(API + clientID.third + "&page=3");


        const result = await Promise.all([responseFirst(), responseSecond(), responseThird()]);
        let json = await Promise.all(result.map(res => res.json()));
        json = json.reduce((a,b) => a.concat(b));

        return dispatch({type: FETCH_IMAGES, payload: json})
    }
};
