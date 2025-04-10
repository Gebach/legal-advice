/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PolicyLazyImport = createFileRoute('/policy')()
const AgreementLazyImport = createFileRoute('/agreement')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const PolicyLazyRoute = PolicyLazyImport.update({
  id: '/policy',
  path: '/policy',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/policy.lazy').then((d) => d.Route))

const AgreementLazyRoute = AgreementLazyImport.update({
  id: '/agreement',
  path: '/agreement',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/agreement.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/agreement': {
      id: '/agreement'
      path: '/agreement'
      fullPath: '/agreement'
      preLoaderRoute: typeof AgreementLazyImport
      parentRoute: typeof rootRoute
    }
    '/policy': {
      id: '/policy'
      path: '/policy'
      fullPath: '/policy'
      preLoaderRoute: typeof PolicyLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/agreement': typeof AgreementLazyRoute
  '/policy': typeof PolicyLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/agreement': typeof AgreementLazyRoute
  '/policy': typeof PolicyLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/agreement': typeof AgreementLazyRoute
  '/policy': typeof PolicyLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/agreement' | '/policy'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/agreement' | '/policy'
  id: '__root__' | '/' | '/agreement' | '/policy'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AgreementLazyRoute: typeof AgreementLazyRoute
  PolicyLazyRoute: typeof PolicyLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AgreementLazyRoute: AgreementLazyRoute,
  PolicyLazyRoute: PolicyLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/agreement",
        "/policy"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/agreement": {
      "filePath": "agreement.lazy.tsx"
    },
    "/policy": {
      "filePath": "policy.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
