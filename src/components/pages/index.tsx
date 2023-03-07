import React from 'react';

import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { CircularProgress } from '@mui/material';

export const IndexPageContainer: React.FC = () => {
  const loading = true;
  const error = undefined;

  if (loading) {
    <CircularProgress></CircularProgress>;
  }

  if (error) {
    return (
      <IndexPage
        {...{
          internalErrorMessage: <div>エラー</div>,
          loading,
        }}
      ></IndexPage>
    );
  }

  return (
    <IndexPage
      {...{
        userId: 1,
        internalErrorMessage: <div>エラー</div>,
        loading,
      }}
    ></IndexPage>
  );
};

type BaseProps = {
  userId: number;
};

type Props =
  | (BaseProps & {
      internalErrorMessage?: undefined;
      loading: boolean;
    })
  | {
      internalErrorMessage: ReactJSXElement;
      loading: boolean;
    };
export const IndexPage: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { internalErrorMessage } = props;
  return <div>Hello.</div>;
};
