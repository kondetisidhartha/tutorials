// try - that checks error
// catch - catch that error and what to do

const user = { email: 'email' }

try {
  // Reference Error
  // myFunction();

  //TypeError
  // null.myFunction();

  //SyntaxError
  // eval - evaluate js within string
  // console.log(eval('8*9'));
  // eval('hello world') // this will be looked as variables

  if (!user.name) {
    // throw 'User have no name';  -> this one throw error like string
    throw new SyntaxError('Hello')
  }

} catch (err) {
  console.log(err)
  // console.log(err.message)
  // console.log(err.name)
  // console.log(err instanceof TypeError)
} finally {
  console.log('Inside finally block')
}

// try catch allow us to continue script without stopping because of error
console.log('After Try Catch Block')