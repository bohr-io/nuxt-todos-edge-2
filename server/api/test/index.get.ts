export default eventHandler(async (event) => {
  return {ok: 4, TEST_VAR: process.env.TEST_VAR}
})