import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ category, courses }) => {
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        return category === "All"
            ? Object.values(courses).flatMap((array) => array)
            : courses[category] || [];
    }

    const coursesToDisplay = getCourses();

    if (!coursesToDisplay || coursesToDisplay.length === 0) {
        return <div className="text-center text-[50px] text-white">Click on All to See Courses</div>;
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {coursesToDisplay.map((course) => (
                <Card
                    key={course.id}
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}
                />
            ))}
        </div>
    );
};

Cards.defaultProps = {
    category: "All",
    courses: {},
};

Cards.propTypes = {
    category: PropTypes.string.isRequired,
    courses: PropTypes.objectOf(PropTypes.array).isRequired,
};

export default Cards;
