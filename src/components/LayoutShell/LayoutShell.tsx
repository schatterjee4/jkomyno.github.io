import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { InfoContext, InfoContextType } from 'src/context';
import { Content, Footer, Header } from 'src/layouts';
import { GithubLogo } from './GithubLogo';
import { Logo } from './Logo';

interface Props {
  children: React.ReactNode;
  color: string;
  headerElement: Element;
};

export const LayoutShell: React.SFC<Props> = ({ children, color, headerElement }) => {
  const BrandElement = <Logo color={color} />;
  const ExternalElement = (
    <span className="icon">
      <GithubLogo color="#282828" />
    </span>
  );

  const renderHeader = ({ authorUrl }: InfoContextType ) => (
    <Header
      Logo={BrandElement}
      ExternalElement={ExternalElement}
      externalUrl={authorUrl} />
  );

  const renderFooter = ({ author, authorUrl, techStack }: InfoContextType) => (
    <Footer
      author={author}
      url={authorUrl}
      techStack={techStack}
    />
  );

  const HeaderComponent = (
    <InfoContext.Consumer>
      {renderHeader}        
    </InfoContext.Consumer>
  );
  const Portal = ReactDOM.createPortal(HeaderComponent, headerElement);

  return (
    <>
      {Portal}
      <Content>
        {children}
      </Content>
      <InfoContext.Consumer>
        {renderFooter}        
      </InfoContext.Consumer>
    </>    
  );
};
