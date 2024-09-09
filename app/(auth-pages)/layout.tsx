import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="max-w-7xl flex flex-col gap-12 items-start">{children}</div>
);

export default Layout;
