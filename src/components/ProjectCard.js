import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 2rem;
  box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadow};
  transition: all 0.3s ease-out;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadowHover};
    transform: translateY(-5px);
  }
`

const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`

const Technologies = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  li {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    padding: 0.4rem 0.8rem;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 0.9rem;
  }
`

const Achievements = styled.ul`
  list-style: disc;
  padding-left: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
`

const LinkButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: auto;
  display: inline-block;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`

const ProjectCard = ({
  title,
  description,
  technologies,
  achievements,
  link,
}) => {
  return (
    <Card>
      <Title>{title}</Title>
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
      {link && (
        <LinkButton href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </LinkButton>
      )}
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
}

export { ProjectCard }
