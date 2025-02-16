import { Suspense } from 'react';
import DashboardData from './DashboardData';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<p>Loading data...</p>}>
        <DashboardData />
      </Suspense>
    </div>
  );
}


