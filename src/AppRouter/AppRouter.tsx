import React from 'react';
import { Layout } from 'layout';
import { RouteList } from 'models';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CVPage, PortfolioPage, NotFoundPage, ProjectPage } from 'pages';
import { DND } from 'components/DnD/dnd';

export const AppRouter = () => (
  <Routes>
    <Route path={RouteList.cv} element={<Layout />}>
      <Route index element={<CVPage />} />
      <Route path={RouteList.portfolio} element={<PortfolioPage />} />
      <Route path={RouteList.project} element={<ProjectPage />} />
      <Route path={RouteList.notFound} element={<NotFoundPage />} />
      <Route path={RouteList.dnd} element={<DND />} />
      <Route path="*" element={<Navigate to={RouteList.notFound} />} />
    </Route>
  </Routes>
);
