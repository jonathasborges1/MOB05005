import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CoachForm from '@pages/CoachForm';
import CoachList from '@pages/CoachList';
import Landing from '@pages/landing';

const RouterProvider: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/study" element={<CoachList/>} />
          <Route path="/give-classes" element={<CoachForm/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default RouterProvider;