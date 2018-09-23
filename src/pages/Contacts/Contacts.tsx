import * as React from 'react';
import { Link } from 'src/components/Link';
import { Section } from 'src/components/Section';

interface ContactLink {
  link: string,
  className: string,
  platformTitle: string,
};

interface Props {
  links: ContactLink[],
};

export class Contacts extends React.PureComponent<Props> {
  public render() {
    const renderedLinks = this.renderLinks();

    return (
      <Section section="Contacts" className="contacts">
        <div className="buttons is-centered">
          {renderedLinks}
        </div>
      </Section>
    );
  }

  private renderLink = ({ link, className, platformTitle }: ContactLink): JSX.Element => (
    <Link
      newTab={true}
      label={platformTitle}
      url={link}
      key={platformTitle}
      className={`button is-outlined is-size-4-desktop is-size-6-mobile ${className}`}
    >
      {platformTitle}
    </Link>
  )

  private renderLinks = (): JSX.Element[] => (
    this.props.links.map(this.renderLink)
  )
};
