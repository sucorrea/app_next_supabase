import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="flex max-w-7xl flex-col items-start gap-12">{children}</div>
);

export default Layout;
