'use client';
import { Sidebar } from '@/app/workspace/[workspaceId]/sidebar';
import { Toolbar } from '@/app/workspace/[workspaceId]/toolbar';

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div className="h-full ">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;
