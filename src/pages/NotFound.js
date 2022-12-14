import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import NotFoundIllustration from '../components/NotFoundIllustration';

// Colors
import { vOrange } from '../Utility/Colors';

// Animation
import { motion } from 'framer-motion';
import { fadeUp } from '../Utility/animation';

const NotFound = () => {
  // Page that shows up when the route we wanted to go on, doesn't exist.
  return (
    <ContainerStyles>
      <ElementsContainer variants={fadeUp} initial='hidden' animate='show'>
        <NotFoundIllustration />
        <Link to='/'>
          <h4>GO HOME</h4>
        </Link>
      </ElementsContainer>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  background: ${vOrange};

  svg {
    width: 99%;
  }
`;

const ElementsContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export default NotFound;
