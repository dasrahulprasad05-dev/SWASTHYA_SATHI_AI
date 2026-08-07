import React from 'react';
import { AppSidebar } from './AppSidebar';
import { AppTopbar } from './AppTopbar';

interface AppLayoutProps {
  children: React.ReactNode;
  rightPanel?: React.ReactNode;
  sidebarBottom?: React.ReactNode;
  topbarTitle?: string;
  topbarSubtitle?: string;
  topbarLeft?: React.ReactNode;
  topbarRight?: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  rightPanel,
  sidebarBottom,
  topbarTitle,
  topbarSubtitle,
  topbarLeft,
  topbarRight,
}) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* Sidebar */}
      <AppSidebar bottomSlot={sidebarBottom} />

      {/* Main Content Column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Topbar */}
        <AppTopbar
          title={topbarTitle}
          subtitle={topbarSubtitle}
          leftContent={topbarLeft}
          rightContent={topbarRight}
        />

        {/* Workspace: Content + Right Panel */}
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* Main Area */}
          <main style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', minWidth: 0 }}>
            {children}
          </main>

          {/* Right Panel (if provided) */}
          {rightPanel && (
            <aside
              style={{
                width: 'var(--right-panel-width)',
                backgroundColor: 'var(--surface)',
                borderLeft: '1px solid var(--border)',
                padding: '1.25rem',
                overflowY: 'auto',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {rightPanel}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};
