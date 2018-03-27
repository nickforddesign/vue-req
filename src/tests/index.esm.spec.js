import Vue from 'vue'
import VueRequests, { Request } from '../index.esm'
import tests from './tests'

Vue.config.productionTip = false

// spy on hooks
const spyBefore = jest.fn()
const spyTimeout = jest.fn()

// set up VueRequests plugin
Vue.use(VueRequests, {
  headers: {
    one: 'test1',
    two() {
      return 'test2'
    },
    three: undefined
  },
  before() {
    spyBefore(this)
  },
  timeout() {
    spyTimeout(this)
  },
  timeout_duration: 1000
})

tests(Vue, spyBefore, spyTimeout, Request)
