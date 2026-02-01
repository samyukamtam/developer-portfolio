import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';

function Experience() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn: {
            color: theme.tertiary,
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.secondary,
                backgroundColor: theme.primary,
            },
        },
        viewArr: {
            color: theme.tertiary,
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            '&:hover': {
                color: theme.tertiary,
                backgroundColor: theme.secondary,
            },
        },
    }));

    const classes = useStyles();
    return (
        <div className="experience" id="experience" style={{backgroundColor: theme.secondary}}> 
             <div className="experience-body">
                 <div className="experience-image">
                     <img src={theme.expimg} alt="" />
                 </div>
                 <div className="experience-description">
                    <h1 style={{color:theme.primary}}>Experience</h1>
                    {experienceData.slice(0, 1).map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            description={exp.description}
                            tools={exp.tools}
                            categories={exp.categories}
                            icon={exp.icon}
                        />
                    ))}
                    {experienceData.length > 3 && (
                        <div className="experience--viewAll">
                            <Link to="/experience">
                                <button className={classes.viewAllBtn}>
                                    View All
                                    <HiArrowRight className={classes.viewArr} />
                                </button>
                            </Link>
                        </div>
                    )}
                 </div>
             </div>
        </div>
    )
}

export default Experience
