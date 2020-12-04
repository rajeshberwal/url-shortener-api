# Url Shortner API

Shortning the long url to short url.

### Requirements

1. Node.js
2. Express.js
3. Mongoose

### How To Run On Localhost

Run following commands

```bash
npm init
npm run start
```

#### HEADERS

    Content-Tapplication/json

#### PARAMS

BODY raw

```bash
{
	"longUrl": "https://github.com/rajeshberwal/dsalib"
}
```

### Using Hosted Version

```bash
curl --location --request POST 'https://api-shortener-url.herokuapp.com/api/url/shorten' \
--header 'Content-T: application/json' \
--data-raw '{
	"longUrl": "https://github.com/rajeshberwal/dsalib"
}'
```
