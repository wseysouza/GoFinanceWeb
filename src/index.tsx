import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancew de website',
          type: "deposit",
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-08-04 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: "withdraw",
          category: 'casa',
          amount: 1100,
          createdAt: new Date('2022-09-04 09:59:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transitions', () => {
      return this.schema.all('transaction')
    })

    this.post("/transitions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);

