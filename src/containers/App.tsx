import * as React from 'react';
import { AnimatedWrapper } from 'src/components/AnimatedWrapper';
import { LayoutShell } from 'src/components/LayoutShell';
import { InfoContext, InfoContextType } from 'src/context';
import { buildEmailAddress } from 'src/helpers';
import { About, Contacts, Hero, Skills } from 'src/pages';

export class App extends React.PureComponent {

  public render() {
    return (
      <InfoContext.Provider value={this.info}>
        <LayoutShell color="#34AAFF" headerElement={this.headerElement!}>
          <AnimatedWrapper>
            <Hero />
            <About />
            <Skills
              leftSkills={this.leftSkills}
              rightSkills={this.rightSkills}
            />
          </AnimatedWrapper>
          <Contacts links={this.contactLinks} />
        </LayoutShell>
      </InfoContext.Provider>
    );
  }

  private get headerElement() {
    return document.getElementById('header-root');
  }

  private get info(): InfoContextType {
    const author = 'Alberto Schiabel';
    const nickname = 'jkomyno';

    return {
      author,
      authorEmail: buildEmailAddress(author, 'gmail.com'),
      authorUrl: `https://github.com/${nickname}`,
      nickname,
      repository: 'jkomyno.github.io',
      techStack: [
        'ReactJS',
        'Bulma',
        'SCSS'
      ],
    };
  }

  private get leftSkills(): string[] {
    return [
      'ReactJS',
      'CSS3',
      'NodeJS',
      'TypeScript'
    ];
  }

  private get rightSkills(): string[] {
    return [
      'Golang',
      'C++14',
      'SQL',
      '(WIP) AWS'
    ];
  }

  private get contactLinks() {
    return [
      {
        className: 'github',
        link: 'https://github.com/jkomyno',
        platformTitle: 'Github',
      },
      {
        className: 'medium',
        link: 'https://medium.com/@alberto.schiabel',
        platformTitle: 'Medium',
      },
      {
        className: 'stackoverflow',
        link: 'https://stackoverflow.com/users/6174476/alberto-schiabel',
        platformTitle: 'StackOverflow',
      },
      {
        className: 'linkedin',
        link: 'https://www.linkedin.com/in/alberto-schiabel-a21262132/',
        platformTitle: 'Linkedin',
      }
    ];
  }
}
