
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
![Sample response without url parameter](./src/public/demo/sample.png)

### With parameter

![Sample response with url parameter](./src/public/demo/with-parameter.png)


## Error response 
Empty array

![Sample response for error](./src/public/demo/error.png)

## To-Do

- [x] Reduce Time delay in fetching a quote from the Database
- [ ] Handle Errors with better response
- [ ] Add more types of quote