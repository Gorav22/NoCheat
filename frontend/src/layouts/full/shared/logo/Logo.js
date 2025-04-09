import { Link } from 'react-router-dom';
import logoDark from '../../../../../src/assets/images/logos/dark-logo.png';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(({ theme }) => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: 'inherit', 
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img src={logoDark} alt="Logo" height={70} style={{ marginRight: '10px' }} />
    </LinkStyled>
  );
};

export default Logo;
