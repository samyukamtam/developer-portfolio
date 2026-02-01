import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-awesome-reveal';
import {
    FiBriefcase,
    FiCpu,
    FiCode,
    FiDatabase,
    FiSettings,
    FiBox,
} from 'react-icons/fi';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

const iconMap = {
    briefcase: FiBriefcase,
    chip: FiCpu,
    code: FiCode,
    data: FiDatabase,
    robot: FiSettings,
    ml: FiBox,
};

function ExperienceCard({
    id,
    anchorId,
    company,
    jobtitle,
    startYear,
    endYear,
    description,
    tools,
    categories,
    icon,
}) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        experienceCard: {
            backgroundColor: theme.primary30,
            '&:hover': {
                backgroundColor: theme.primary50,
            },
        },
        iconWrap: {
            backgroundColor: theme.primary,
        },
        icon: {
            color: theme.secondary,
        },
        tag: {
            backgroundColor: theme.secondary,
            color: theme.tertiary,
        },
    }));

    const classes = useStyles();
    const Icon = iconMap[icon] || FiBriefcase;

    return (
        <Fade bottom>
            <div
                key={id}
                id={anchorId}
                className={`experience-card ${classes.experienceCard}`}
            >
                <div className={`expcard-icon ${classes.iconWrap}`}>
                    <Icon className={`expcard-iconSvg ${classes.icon}`} aria-hidden="true" />
                </div>
                <div className="experience-details">
                    <h6 style={{ color: theme.primary }}>{startYear}-{endYear}</h6>
                    <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
                    <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
                    {Array.isArray(description) ? (
                        <ul className="experience-descList" style={{ color: theme.tertiary80 }}>
                            {description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        description && (
                            <p className="experience-desc" style={{ color: theme.tertiary80 }}>
                                {description}
                            </p>
                        )
                    )}
                    {Array.isArray(tools) && tools.length > 0 && (
                        <div className="experience-meta">
                            <span className="experience-metaLabel" style={{ color: theme.tertiary80 }}>
                                Tools
                            </span>
                            <div className="experience-tags">
                                {tools.map((tool) => (
                                    <span key={tool} className={`experience-tag ${classes.tag}`}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {Array.isArray(categories) && categories.length > 0 && (
                        <div className="experience-meta">
                            <span className="experience-metaLabel" style={{ color: theme.tertiary80 }}>
                                Categories
                            </span>
                            <div className="experience-tags">
                                {categories.map((cat) => (
                                    <span key={cat} className={`experience-tag ${classes.tag}`}>
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Fade>
    );
}

export default ExperienceCard;
