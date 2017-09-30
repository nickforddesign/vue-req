import VueRequest from '../index'
import Vue from 'vue'

Vue.use(VueRequest)

const app = new Vue()

describe('vue-req', () => {
  fetch.mockResponseOnce(JSON.stringify({
    'foo': 'bar'
  }), {
    status: 200
  })

  it('should get json', () => {
    expect.assertions(1)
    return app.$request('/')
      .then(response => {
        // console.log({response})
        expect(response)
          .toEqual({
            foo: 'bar'
          })
      })
  })

  fetch.mockResponseOnce(JSON.stringify({
    'error': 'failed'
  }), {
    status: 500
  })

  it('should throw for a failed fetch', () => {
    expect.assertions(1)
    return app.$request('/')
      .catch(error => {
        // console.log(error)
        expect(error)
          .toBeInstanceOf(Object)
      })
  })
})