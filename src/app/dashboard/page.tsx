'use client';

import React, { Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Main from '../components/sections/Main';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
        <p className="text-gray-300 mb-4">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-white text-xl">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
        Loading...
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="min-h-screen bg-gray-900">
        <Suspense fallback={<LoadingFallback />}>
          <Navbar />
          <Hero />
          <Main />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
} 