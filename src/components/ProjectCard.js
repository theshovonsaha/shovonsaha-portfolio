import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa"

const Card = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => `${theme.colors.primary}10`};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => `${theme.colors.primary}40`}
    );
    opacity: 0.9;
    transition: height 0.3s ease;
  }
`

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
`

const Title = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  flex-grow: 1;
  padding-right: 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

const IconButton = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(100%);
    transition: transform 0.3s ease;
    z-index: 0;
  }

  &:hover {
    transform: rotate(12deg) scale(1.1);

    &::before {
      transform: translateY(0);
    }

    svg {
      color: ${({ theme }) => theme.colors.card};
      transform: scale(1.1);
    }
  }

  svg {
    width: 14px;
    height: 14px;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-size: 0.95rem;
  opacity: 0.9;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Technologies = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;

  li {
    background: ${({ theme }) => `${theme.colors.primary}12`};
    color: ${({ theme }) => theme.colors.primary};
    padding: 0.35rem 0.75rem;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid ${({ theme }) => `${theme.colors.primary}20`};

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.card};
      transform: translateY(-2px) scale(1.05);
    }
  }
`

const Achievements = styled.ul`
  display: none;
`

const StyledDetailedCard = styled(Card)`
  cursor: default;
  height: auto;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: none;
  transform: none;
  padding: 2rem;

  &:hover {
    transform: none;
    box-shadow: none;
  }

  ${Description} {
    display: block;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  ${Technologies} {
    margin-bottom: 2rem;
    li {
      font-size: 0.9rem;
      padding: 0.5rem 1.25rem;
    }
  }

  ${Title} {
    font-size: 1.75rem;
  }

  ${IconButton} {
    width: 42px;
    height: 42px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`

const DetailedAchievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};

  li {
    margin-bottom: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: flex-start;
    line-height: 1.5;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: "→";
      color: ${({ theme }) => theme.colors.primary};
      margin-right: 0.75rem;
      font-weight: bold;
    }
  }
`

const CompactCard = ({
  title,
  description,
  technologies,
  achievements,
  link,
  demo,
  onClick,
}) => {
  return (
    <Card onClick={onClick}>
      <TopRow>
        <Title>{title}</Title>
        <ActionButtons onClick={e => e.stopPropagation()}>
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
        {technologies.slice(0, 4).map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
        {technologies.length > 4 && <li>+{technologies.length - 4} more</li>}
      </Technologies>
      <Achievements>{/* Hidden in compact view */}</Achievements>
    </Card>
  )
}

CompactCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
  demo: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

const DetailedCard = props => <StyledDetailedCard {...props} />

DetailedCard.propTypes = CompactCard.propTypes

const ProjectCard = { CompactCard, DetailedCard, DetailedAchievements }

export { ProjectCard }
