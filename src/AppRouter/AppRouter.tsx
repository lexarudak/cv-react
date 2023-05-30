import React from 'react';
import { Layout } from 'layout';
import { RouteList } from 'models';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, AboutPage, NotFoundPage } from 'pages';

export const AppRouter = () => (
  <Routes>
    <Route path={RouteList.home} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={RouteList.about} element={<AboutPage />} />
      <Route path={RouteList.notFound} element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to={RouteList.notFound} />} />
    </Route>
  </Routes>
);
