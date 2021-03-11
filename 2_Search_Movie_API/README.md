# Introduction
Search Movie API with [omdbapi](https://omdbapi.com) written in NodeJs

# Get Started
- run the container
```bash
docker-compose up -d
```

- create db and use db
```bash
docker exec -it omdb_api_db mysql -uroot -proot
```
```bash
mysql > create database omdb;
mysql > use omdb;
```

- create table
```bash
mysql > CREATE TABLE IF NOT EXISTS `logger` ( id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, datetime DATETIME DEFAULT CURRENT_TIMESTAMP, endpoint varchar(255) NOT NULL, param varchar(255) NOT NULL);

```

- run app
```bash
node server.js
```

- test app
```bash
npm test
```

# API SPEC
## Search All Movies

Request :
- Method : GET
- Endpoint : `/search`
- Header :
    - Accept: application/json
- Param:

| Parameter | Required | Valid Options | Default Value | Description |
| :--------:| :------: | :------------:| :-----------: | :---------: |
|apikey| Yes| | | Your api key |
| s | Yes | | | Movie title to search for |
| type | No | movie, series, episode | | 	Type of result to return |
| y | No | | | Year of release |
| page | No | 1 -100 | 1 | Page number to return |

\
Example:

`localhost:3000/search/?apikey=ab21a078&s=Avenger&y=2011&page=1`

Response :
- Status: 200 OK

```json 
{
    "Search": [
        {
            "Title": "Captain America: The First Avenger",
            "Year": "2011",
            "imdbID": "tt0458339",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: The First Avenger - Outfitting a Hero",
            "Year": "2011",
            "imdbID": "tt2172302",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "Captain America: The First Avenger - Heightened Technology",
            "Year": "2011",
            "imdbID": "tt5224038",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "Captain America: The First Avenger - The Transformation",
            "Year": "2011",
            "imdbID": "tt5224054",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "Marvel LIVE! World Premiere of Captain America: The First Avenger",
            "Year": "2011",
            "imdbID": "tt1998278",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "Captain America: The First Avenger - Behind the Skull",
            "Year": "2011",
            "imdbID": "tt5224072",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "Captain America: The First Avenger - Captain America's Origin",
            "Year": "2011",
            "imdbID": "tt5224076",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "PAN the Avenger",
            "Year": "2011",
            "imdbID": "tt2357257",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "The Burqaclad Avenger",
            "Year": "2011",
            "imdbID": "tt3715958",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "Captain America: The First Avenger - Howling Commandos",
            "Year": "2011",
            "imdbID": "tt5224026",
            "Type": "movie",
            "Poster": "N/A"
        }
    ],
    "totalResults": "11",
    "Response": "True"
}
```

## Detail Movie

Request :
- Method : GET
- Endpoint : `/detail`
- Header :
    - Accept: application/json
- Param:

| Parameter | Required | Valid Options | Default Value | Description |
| :--------:| :------: | :------------:| :-----------: | :---------: |
|apikey| Yes| | | Your api key |
| t | Optional* | | | Movie title to search for |
| i | Optional* ||| A valid IMDb ID (e.g. tt1285016) |
| type | No | movie, series, episode | | 	Type of result to return |
| y | No | | | Year of release |
| plot | No | short, full | short | Return short or full plot. |

\
*Please note while both "i" and "t" are optional at least one argument is required.

\
Example:

`localhost:3000/detail/?apikey=ab21a078&t=Avenger&y=2011`

Response :
- Status: 200 OK

```json 
{
    "Title": "Captain America: The First Avenger",
    "Year": "2011",
    "Rated": "PG-13",
    "Released": "22 Jul 2011",
    "Runtime": "124 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Joe Johnston",
    "Writer": "Christopher Markus (screenplay), Stephen McFeely (screenplay), Joe Simon (comic books), Jack Kirby (comic books)",
    "Actors": "Chris Evans, Hayley Atwell, Sebastian Stan, Tommy Lee Jones",
    "Plot": "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a \"Super-Soldier serum\". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
    "Language": "English, Norwegian, French",
    "Country": "USA",
    "Awards": "4 wins & 46 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "6.9/10"
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "80%"
        },
        {
            "Source": "Metacritic",
            "Value": "66/100"
        }
    ],
    "Metascore": "66",
    "imdbRating": "6.9",
    "imdbVotes": "741,802",
    "imdbID": "tt0458339",
    "Type": "movie",
    "DVD": "23 Nov 2015",
    "BoxOffice": "$176,654,505",
    "Production": "Marvel Enterprises",
    "Website": "N/A",
    "Response": "True"
}
```

## Get All Loggers

Request :
- Method : GET
- Endpoint : `/loggers`
- Header :
    - Accept: application/json

Example:

`localhost:3000/loggers`

Response :
- Status: 200 OK

```json 
[
    {
        "id": 1,
        "datetime": "2021-03-10T13:03:44.000Z",
        "endpoint": "/loggers",
        "param": "{}"
    },
    {
        "id": 2,
        "datetime": "2021-03-10T13:03:54.000Z",
        "endpoint": "/detail/",
        "param": "{\"apikey\":\"ab21a078\",\"t\":\"Avenger\",\"y\":\"2011\",\"page\":\"1\"}"
    },
    {
        "id": 3,
        "datetime": "2021-03-10T13:04:16.000Z",
        "endpoint": "/search/",
        "param": "{\"apikey\":\"ab21a078\",\"s\":\"Avenger\",\"y\":\"2011\",\"page\":\"1\"}"
    },
]
```