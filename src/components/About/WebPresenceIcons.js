import React from "react"
import { ThemeContext } from "../../layouts";
import { FaGithub, FaStackOverflow, FaLinkedin, FaYoutube } from 'react-icons/fa'
import config from "../../../content/meta/config";

const WebPresenceIcons = () => {
    return (
        
        <React.Fragment>
            <ThemeContext.Consumer>
                {theme => (
                    <div className="wrapper">
                        <div className="icons">
                            <a href={config.authorGithub} target="_blank"><FaGithub/></a>
                            <a href={config.authorStackoverflow} target="_blank"><FaStackOverflow/></a>
                            <a href={config.authorLinkedin} target="_blank"><FaLinkedin/></a>
                            <a href={config.authorYoutube} target="_blank"><FaYoutube/></a>
                            {/* TODO Codeforces */}
                        </div>
                        <style jsx>{`
                        .wrapper {
                            text-align: center;
                        }
                        .icons {
                            display: inline-block;
                            font-size: 60px;
                            :global(svg) {
                                margin: 10px;
                                fill: ${theme.color.brand.primary};
                            }
                        }
                        `}</style>
                    </div>
                )}
            </ThemeContext.Consumer>
        </React.Fragment>
    );
};

export default WebPresenceIcons;