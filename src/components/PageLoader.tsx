import React from 'react'

const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center py-20">
    <span className="inline-block w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
  </div>
)

export default PageLoader