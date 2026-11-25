import type { PageHeadingProps } from '../types/props';

const PageHeading = ({ title, subtitle }: PageHeadingProps) => {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <p className="page-sub">{subtitle}</p>
    </>
  );
};

export default PageHeading;
