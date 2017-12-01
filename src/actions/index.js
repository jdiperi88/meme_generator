export const RECEIVE_MEMES = 'RECEIVE_MEMES';

export function receive_memes(json){
    const { memes } = json.data;
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

function fetch_memes_json(){
    return fetch('https://api.imgflip.com/get_memes')
        .then(res=>{
            res,json()
        })
}

export function fetch_memes(){
    return function(dispatch){
        return fetch_memes_json()
            .then(json => dispatch(receive_memes(json)))
    }
}