// // keys to use Petfinder API
// const petFinderKey = "85M0Le5ywilSAxXmQk5cvNWgrO03XluwDzz2ALbvGHwFQpSk3M";
// const petFinderSecret = "y6uvIhNy9I6se6Fu9zCRaHY8jf99I2hYSgczYJBg";

// // fetches and tracks the use of the keys
// module.exports = { AuthToken: async (req, res) => {
//     const params = new URLSearchParams();
//     params.append("grant_type", "client_credentials");
//     params.append("client_id", petFinderKey);
//     params.append("client_secret", petFinderSecret);
//     const petfinderRes = await fetch(
//         "https://api.petfinder.com/v2/oauth2/token",
//         {
//             method: "POST",
//             body: params
//         }
//     );
//     const data = await petfinderRes.json();
//     res.send(data);
// }};