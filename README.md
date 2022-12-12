
# REST API - Hindi Quotes

An API which display random हिन्दी Quotes.

> https://hindi-quotes.vercel.app/random

## Method

- GET

## URL params

 - /success
 - /love
 - /attitude
 - /positive
 - /motivational

## Success response
An array with JSON object <br>

> Without parameter

![Sample response without url parameter](./public/demo/noparam.jpg)

> With parameter

![Sample response with url parameter](./public/demo/param.jpg)


> Error response - JSON Object with Error Object and Status 400(Invalid Request)

![Response for error](./public/demo/error.png)


# Development - How to setup locally?
Check if `node` is installed
```bash
node -v

# if this throws error, then install nodejs
# link - https://nodejs.org/en/download/
```

#### Steps
- After cloning the repository, `cd` to project folder
```bash
npm install 
```
- After all packages are installed, start the server
```bash
npm start

# or
nodemon server.js
```

## Contributing
- Read [CONTRIBUTION.md](./CONTRIBUTION.md) for guidelines.

## To-Do

- [x] Reduce Time delay in fetching a quote from the Database
- [x] Handle Errors with better response
- [ ] Add more types of quote
