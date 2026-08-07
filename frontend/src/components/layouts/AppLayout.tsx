import React, { useState } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* Desktop Sidebar */}
      <div className="mobile-hidden-sidebar">
        <AppSidebar bottomSlot={sidebarBottom} />
      </div>

      {/* Mobile Sidebar Overlay & Drawer */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-drawer-overlay mobile-only" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <div className={`mobile-drawer-sidebar mobile-only ${isMobileMenuOpen ? 'open' : ''}`}>
        <AppSidebar bottomSlot={sidebarBottom} onClose={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Main Content Column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Topbar */}
        <AppTopbar
          title={topbarTitle}
          subtitle={topbarSubtitle}
          leftContent={topbarLeft}
          rightContent={topbarRight}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />

        {/* Workspace: Content + Right Panel */}
        <div className="mobile-flex-col" style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* Main Area */}
          <main style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', minWidth: 0 }} className="mobile-px-2">
            {children}
          </main>

          {/* Right Panel (if provided) */}
          {rightPanel && (
            <aside
              className="mobile-right-panel"
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
