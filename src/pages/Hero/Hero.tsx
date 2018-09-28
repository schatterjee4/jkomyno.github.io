import * as React from 'react';
import { ActionButton } from 'src/components/ActionButton';
import { Matrix } from 'src/components/Matrix';
import { Section } from 'src/components/Section';
import { SubTitle, Title } from 'src/components/Text';
import { InfoContext, InfoContextType } from 'src/context';

export const Hero: React.SFC<{}> = () => {
  const salute = `Hi, my name is`;
  const subtitle = `and I'm a`;
  const matrixText = `Software engineer`;

  const standup = `I like tackling problems with creative solutions,
  crafting testable code for front-end and back-end.`;

  const renderAuthorInfo = ({ author, nickname }: InfoContextType ) => (
    <>
      <Title big>{author}</Title>
      <SubTitle code>{`/* @${nickname} */`}</SubTitle>
    </>
  );

  const AuthorInfoComponent = (
    <InfoContext.Consumer>
      {renderAuthorInfo}        
    </InfoContext.Consumer>
  );

  return (
    <Section hideTitle section="Hero" className="hero">
      <div className="has-text-centered">
        <SubTitle big>{salute}</SubTitle>
        {AuthorInfoComponent}
        <SubTitle>{subtitle}</SubTitle>
      </div>
      <Matrix
        columns={4}
        sentence={matrixText}
      />
      <Title center={true}>{standup}</Title>
      <ActionButton
        url="/resume.pdf"
        message="Get my resume"
      /> 
    </Section>
  );
};
