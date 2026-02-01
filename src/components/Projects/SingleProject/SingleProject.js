import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FiGlobe } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';

function SingleProject({ id, name, desc, tags, code, demo, image, theme, professor, details, website }) {
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    <img src={image ? image : placeholder} alt={name} />
                    <div className='project--showcaseBtn'>
                        {website && (
                            <a
                                href={website}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-website`}
                            >
                                <FiGlobe
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-website`}
                                    className={classes.icon}
                                    aria-label='Website'
                                />
                            </a>
                        )}
                        <a
                            href={code}
                            target='_blank'
                            rel='noreferrer'
                            className={classes.iconBtn}
                            aria-labelledby={`${name
                                .replace(' ', '-')
                                .toLowerCase()} ${name
                                .replace(' ', '-')
                                .toLowerCase()}-code`}
                        >
                            <FaCode
                                id={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                                className={classes.icon}
                                aria-label='Code'
                            />
                        </a>
                    </div>
                </div>
                <div
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {Array.isArray(desc) ? (
                        <ul className='project--details'>
                            {desc.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{desc}</p>
                    )}
                    {professor && (
                        <p className='project--professor'>
                            <strong>Professor:</strong> {professor}
                        </p>
                    )}
                    {Array.isArray(details) && details.length > 0 && (
                        <ul className='project--details'>
                            {details.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
        </Fade>
    );
}

export default SingleProject;
