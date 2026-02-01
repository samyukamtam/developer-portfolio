import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-awesome-reveal';

import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg'
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg'
import './Education.css'

function EducationCard({
    id,
    institution,
    course,
    subtext,
    courses,
    institutionUrl,
    programUrl,
    startYear,
    endYear,
}) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    const cardHref = programUrl || institutionUrl;

    return (
        <Fade bottom>
            {cardHref ? (
                <a
                    key={id}
                    href={cardHref}
                    target="_blank"
                    rel="noreferrer"
                    className={`education-card education-cardLink ${classes.educationCard}`}
                >
                    <div className="educard-img" style={{backgroundColor: theme.primary}}>
                        <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                    </div>
                    <div className="education-details">
                        <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                        <h4 style={{color: theme.tertiary}}>{course}</h4>
                        <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                        {subtext && (
                            <p className="education-subtext" style={{color: theme.tertiary80}}>
                                {subtext}
                            </p>
                        )}
                        {Array.isArray(courses) && courses.length > 0 && (
                            <p className="education-courses" style={{color: theme.tertiary70}}>
                                {courses.join(' • ')}
                            </p>
                        )}
                    </div>
                </a>
            ) : (
                <div key={id} className={`education-card ${classes.educationCard}`} >
                    <div className="educard-img" style={{backgroundColor: theme.primary}}>
                        <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" />
                    </div>
                    <div className="education-details">
                        <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                        <h4 style={{color: theme.tertiary}}>{course}</h4>
                        <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                        {subtext && (
                            <p className="education-subtext" style={{color: theme.tertiary80}}>
                                {subtext}
                            </p>
                        )}
                        {Array.isArray(courses) && courses.length > 0 && (
                            <p className="education-courses" style={{color: theme.tertiary70}}>
                                {courses.join(' • ')}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </Fade>        
    )
}

export default EducationCard
