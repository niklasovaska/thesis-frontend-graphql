import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import { ApolloProvider } from '@apollo/client/react'
import client from './lib/apollo-client.ts'
import { RouterProvider } from 'react-router'
import router from './router/router.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)
