import React from 'react';
import Loading from 'src/components/Loading'
const AuthorsList = React.lazy(() => import('authors_application/AuthorList'))

const Authors = () => {
  return (
    <React.Suspense fallback={Loading}>
      <AuthorsList />
    </React.Suspense>
  )
}

export default Authors;