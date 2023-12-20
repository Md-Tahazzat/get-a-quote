import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamMember = ({
  image,
  name,
  designation,
  socialLinks,
}: {
  image: string;
  name: string;
  designation: string;
  socialLinks:Array<
    {
      icon: string;
      link: string;
    }
  >;
}) => {
  return (
    <>
      <div className="team-component animate-from-bottom">
        <div className="team-component-inner">
          <div className="team-component-content">
            <div className="team-component-thumb">
              <figure>
                <Image width={500} height={500} src={image} alt="al-amin" />
              </figure>
            </div>
            <div className="team-component-title">
              <h5 className="split-heading justify-center">{name}</h5>
              <span className="animate-from-bottom">{designation}</span>
            </div>
          </div>
          <div className="team-component-social">
            <ul>
              {socialLinks.map((social, index) => {
                return (
                  <li key={`${social.link} - ${index}`}>
                    <Link
                      href={social.link}
                      target="_blank"
                    >
                      <Image
                        width={500}
                        height={500}
                        src={social.icon}
                        alt="fb"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
