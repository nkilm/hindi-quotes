
# REST API - Hindi Quotes

An API which display random हिन्दी Quotes.

## Method

- GET

## URL params

 - /success
 - /love
 - /attitude
 - /positive
 - /motivational

## Success response

An array with JSON object

### Without parameter
![Sample response without url parameter](./public/demo/noparam.png)

### With parameter

![Sample response with url parameter](./public/demo/param.png)


## Error response 
JSON Object with Error Object and Status 400(Invalid Request)

![Response for error](./src/public/demo/error.png)

## To-Do

- [x] Reduce Time delay in fetching a quote from the Database
- [x] Handle Errors with better response
- [ ] Add more types of quote