import React from 'react';
import { Github } from '../icons/github';
import { Google } from '../icons/google';
import { Facebook } from '../icons/facebook';
import { StyledButton, StyledSeparator } from '../styledComponents';
import { useAuthorizer } from '../contexts/AuthorizerContext';
import { ButtonAppearance } from '../constants';
import { createQueryParams } from '../utils/common';
import { LinkedIn } from '../icons/linkedin';
import { Apple } from '../icons/apple';
import { Twitter } from '../icons/twitter';
import { Microsoft } from '../icons/microsoft';

export const AuthorizerSocialLogin: React.FC<{
  urlProps?: Record<string, any>;
  roles?: string[];
}> = ({ urlProps, roles }) => {
  const { config } = useAuthorizer();
  const hasSocialLogin =
    config.is_google_login_enabled ||
    config.is_github_login_enabled ||
    config.is_facebook_login_enabled ||
    config.is_linkedin_login_enabled ||
    config.is_apple_login_enabled ||
    config.is_twitter_login_enabled ||
    config.is_microsoft_login_enabled;

  const data: {
    scope?: string;
    roles?: string[];
  } = {
    ...(urlProps || {}),
    scope: urlProps?.scope.join(' '),
  };

  if (roles && roles.length) {
    data.roles = roles;
  }

  const queryParams = createQueryParams(data);

  return (
    <>
      {config.is_apple_login_enabled && (
        <div id="appleid-signin">
          <StyledButton
            appearance={ButtonAppearance.Default}
            onClick={() => {
              window.location.href = `${config.authorizerURL}/oauth_login/apple?${queryParams}`;
            }}
          >
            <Apple />
            Continue with Apple
          </StyledButton>
          <br />
        </div>
      )}
      {config.is_google_login_enabled && (
        <>
          <StyledButton
            appearance={ButtonAppearance.Default}
            onClick={() => {
              window.location.href = `${config.authorizerURL}/oauth_login/google?${queryParams}`;
            }}
          >
            <Google />
            Continue with Google
          </StyledButton>
          <br />
        </>
      )}
      {config.is_github_login_enabled && (
        <>
          <StyledButton
            appearance={ButtonAppearance.Default}
            onClick={() => {
              window.location.href = `${config.authorizerURL}/oauth_login/github?${queryParams}`;
            }}
          >
            <Github />
            Continue with Github
          </StyledButton>
          <br />
        </>
      )}
      {config.is_facebook_login_enabled && (
        <>
          <StyledButton
            appearance={ButtonAppearance.Default}
            onClick={() => {
              window.location.href = `${config.authorizerURL}/oauth_login/facebook?${queryParams}`;
            }}
          >
            <Facebook />
            Continue with Facebook
          </StyledButton>
          <br />
        </>
      )}
      {config.is_linkedin_login_enabled && (
        <>
          <StyledButton
            appearance={ButtonAppearance.Default}
            onClick={() => {
              window.location.href = `${config.authorizerURL}/oauth_login/linkedin?${queryParams}`;
            }}
          >
            <LinkedIn />
            Continue with LinkedIn
          </StyledButton>
          <br />
        </>
      )}
      {config.is_twitter_login_enabled && (
        <>
          <StyledButton
            appearance={ButtonAppearance.Default}
            onClick={() => {
              window.location.href = `${config.authorizerURL}/oauth_login/twitter?${queryParams}`;
            }}
          >
            <Twitter />
            Continue with Twitter
          </StyledButton>
          <br />
        </>
      )}
      {config.is_microsoft_login_enabled && (
        <>
          <StyledButton
            appearance={ButtonAppearance.Default}
            onClick={() => {
              window.location.href = `${config.authorizerURL}/oauth_login/microsoft?${queryParams}`;
            }}
          >
            <Microsoft />
            Continue with Microsoft
          </StyledButton>
          <br />
        </>
      )}
      {hasSocialLogin &&
        (config.is_basic_authentication_enabled ||
          config.is_magic_link_login_enabled) && (
          <StyledSeparator>OR</StyledSeparator>
        )}
    </>
  );
};
