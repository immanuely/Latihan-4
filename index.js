import AuthorData from "./author_data";
let authordata = new AuthorData()
let show = function() {
    console.log(authordata)
    authordata.getProfile().then(data=>{
        authordata.showProfile(data);
    }).catch(e => console.log(e));
}
show();