import jsRouter from './router/js-router'
import uiRouter from './router/ui-router'
import reportRouter from './router/report-router'
export default [
  ...jsRouter,
  ...uiRouter,
  ...reportRouter
]
