import React from 'react';
import styled from 'styled-components/native';
import GoBack from '../../goBack';
import Title from '../../title';

const StyledHeader = styled.View`
  flex: 1.5;
`;

export default function Header({onPress, title}) {
  return (
    <StyledHeader>
      <GoBack onPress={onPress} />
      <Title title={title} />
    </StyledHeader>
  );
}
