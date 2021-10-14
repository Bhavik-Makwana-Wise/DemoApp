import { TracingLocals } from '@transferwise/crab/lib/middlewares/jaeger-tracing';
import { ProfilesLocals } from '@transferwise/crab/lib/middlewares/profiles';
import { SessionLocals } from '@transferwise/crab/lib/middlewares/session-details';
import { GetServerSidePropsContext, NextApiResponse, GetServerSidePropsResult } from 'next';
import { ParsedUrlQuery } from 'node:querystring';

export type ResponseLocals = SessionLocals &
  Omit<ProfilesLocals, 'userDetails'> &
  TracingLocals & {
    apiUrl: string;
    language: string;
    locale: string;
  };

export type GetServerSidePropsContextWithLocals = GetServerSidePropsContext<ParsedUrlQuery> & {
  req: {
    cookies: Record<string, string>;
  };
  res: NextApiResponse & {
    locals: ResponseLocals;
  };
};

export type CrabGetServerSideProps<
  P extends { [key: string]: unknown } = { [key: string]: unknown },
> = (context: GetServerSidePropsContextWithLocals) => Promise<GetServerSidePropsResult<P>>;
