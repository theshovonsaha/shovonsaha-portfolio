import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa"

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => `${theme.colors.primary}80`}
    );
  }
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`

const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  flex-grow: 1;
  padding-right: 1rem;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`

const IconButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    transform: rotate(12deg) scale(1.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;
`

const Technologies = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;

  li {
    background: ${({ theme }) => `${theme.colors.primary}15`};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      transform: translateY(-2px);
    }
  }
`

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};

  li {
    margin-bottom: 0.75rem;
    font-size: 1rem;
    display: flex;
    align-items: flex-start;

    &::before {
      content: "→";
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 0.75rem;
      font-weight: bold;
    }
  }
`

const ProjectCard = ({
  title,
  description,
  technologies,
  achievements,
  link,
  demo,
}) => {
  return (
    <Card>
      <TopRow>
        <Title>{title}</Title>
        <ActionButtons>
          {link && (
            <IconButton
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title="View Project"
              aria-label="View Project"
            >
              <FaExternalLinkAlt />
            </IconButton>
          )}
          {demo && (
            <IconButton
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              aria-label="Live Demo"
            >
              <FaGlobe />
            </IconButton>
          )}
        </ActionButtons>
      </TopRow>
      <Description>{description}</Description>
      <Technologies>
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </Technologies>
      <Achievements>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </Achievements>
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
  demo: PropTypes.string,
}

export { ProjectCard }
